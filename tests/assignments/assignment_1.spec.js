import { test, expect } from '@playwright/test';

test('Assignment: Full Booking Flow with Event Creation', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByPlaceholder('you@email.com').fill('jebudaitya@gmail.com');
    await page.getByPlaceholder('••••••').fill('Jebu&357@uto');
    await page.getByRole('button',{name:'Sign In'}).click();
    expect(await page.getByTestId('nav-home')).toHaveText('Home');
    await page.getByRole('button',{name:'Admin'}).click();
    await page.getByText('Manage Events').first().click();
    await page.locator('.mx-1').waitFor();
    expect(await page.getByText('+ New Event')).toBeVisible();
    // const eventName = await page.locator('#event-table-row').filter({hasText:'Test_Automation_event_1'}).textContent();
    // console.log("this is  the text -- " + eventName)
    // if()
    // // await page.locator('#event-card').filter({hasText:'World Tech Summit'}).getByText('Book Now').click();
    // // await page.locator("#customerName").waitFor();
    // //expect(await page.getByPlaceholder('Event title')).toBeVisible();
    await page.getByPlaceholder('Event title').fill('Test_Automation_event_1');
    await page.getByPlaceholder('Describe the event…').fill('this event is created for playwright assignment 1');
    await page.locator('#category').selectOption("Workshop");
    await page.locator('#city').fill('Bengaluru');
    await page.locator('#venue').fill('Palace Grounds - 10/7, Kumara Krupa Road, near Chamara Vajra, Jayamahal, Bengaluru, Karnataka 560006, India');
    await page.locator('input[type="datetime-local"]').pressSequentially('10252028', { delay: 150 });
    await page.keyboard.press('Tab');
    await page.locator('input[type="datetime-local"]').pressSequentially('1030AM', { delay: 150 });
    await page.getByPlaceholder('0.00').fill('2000');
    await page.locator('#total-seats').fill('250'); 
    await page.locator('#add-event-btn').click();
    await page.waitForTimeout(2000);
    await page.locator('#nav-events').click();
    // await page.locator('#event-card').filter({hasText:'Test_Automation_event_1'}).filter({hasText:'250 seats available'})
    // const initialSeatCount = await page.locator('//span[normalize-space()="250 seats available"]').textContent();
    // console.log("available initial seat count: " + initialSeatCount);
    const Eventcard1= await page.locator('article').filter({hasText:'Test_Automation_event_1'});
    const seatText1=await Eventcard1.getByText(/seats available/).textContent();
    const seatsBeforeBooking=seatText1.match(/\d+/)[0];
    console.log("Before Booking: "+ seatsBeforeBooking);
    await page.locator('#event-card').filter({hasText:'Test_Automation_event_1'}).locator('#book-now-btn').click();
    await page.waitForTimeout(2000);
    await page.locator('#customerName').waitFor(); 
    await page.locator('#customerName').fill('Virat Kohli');
    await page.locator('#customer-email').fill('vk18@gmail.com');
    await page.locator('#phone').fill('+919876543210');
    await page.locator('#confirm-booking').click();
    await page.waitForTimeout(2000);
    await page.locator('div[class="lg:col-span-1"]').waitFor();
    await page.locator('div>h3').filter({hasText:'Booking Confirmed!'});
    await page.locator('#nav-events').click();
    await page.locator('#event-card').first().waitFor();
    const Eventcard2= await page.locator('article').filter({hasText:'Test_Automation_event_1'});
    const seatText2= await Eventcard2.getByText(/seats available/).textContent();
    const seatsAfterBooking=seatText2.match(/\d+/)[0];
    console.log("After Booking: "+ seatsAfterBooking);
});