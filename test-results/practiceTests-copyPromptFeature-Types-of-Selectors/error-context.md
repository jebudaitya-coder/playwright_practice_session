# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practiceTests\copyPromptFeature.spec.js >> Types of Selectors
- Location: tests\practiceTests\copyPromptFeature.spec.js:3:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//*[@ud="nav-bookings"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5]:
        - /url: /
      - generic [ref=e10]:
        - link "Home" [ref=e11]:
          - /url: /
        - link "Events" [ref=e12]:
          - /url: /events
        - link "My Bookings" [ref=e13]:
          - /url: /bookings
        - link "API Docs" [ref=e14]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]
        - generic [ref=e19]:
          - generic "student@example.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e26]:
        - heading "Discover & Book Amazing Events" [level=1] [ref=e27]: Discover & BookAmazing Events
        - paragraph [ref=e28]: From tech conferences to live concerts, sports events to cultural festivals — find experiences that inspire you.
        - generic [ref=e29]:
          - link "Browse Events →" [ref=e30]:
            - /url: /events
          - link [ref=e32]:
            - /url: /bookings
            - button "My Bookings" [ref=e33] [cursor=pointer]
      - generic [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - heading "Featured Events" [level=2] [ref=e37]
            - paragraph [ref=e38]: Hand-picked upcoming events just for you
          - link "View all →" [ref=e39]:
            - /url: /events
        - generic [ref=e40]:
          - article [ref=e41]:
            - generic [ref=e42]:
              - img "Dilli Diwali Mela" [ref=e43]
              - generic [ref=e44]: Festival
              - generic [ref=e46]: Featured
            - generic [ref=e47]:
              - link [ref=e48]:
                - /url: /events/285
                - heading "Dilli Diwali Mela" [level=3] [ref=e49]
              - generic [ref=e50]:
                - generic [ref=e51]: Tue, 20 Oct
                - generic [ref=e55]: Pragati Maidan Exhibition Grounds, Delhi
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - paragraph [ref=e61]: $300
                  - generic [ref=e62]: 2646 seats available
                - link "Book Now" [ref=e63]:
                  - /url: /events/285
          - article [ref=e64]:
            - generic [ref=e65]:
              - img "Hollywood Monsoon Night — Los Angeles" [ref=e66]
              - generic [ref=e67]: Concert
              - generic [ref=e69]: Featured
            - generic [ref=e70]:
              - link [ref=e71]:
                - /url: /events/284
                - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e72]
              - generic [ref=e73]:
                - generic [ref=e74]: Sat, 11 Jul
                - generic [ref=e78]: Dome, NSCI SVP Stadium, Worli, Los Angeles
              - generic [ref=e82]:
                - generic [ref=e83]:
                  - paragraph [ref=e84]: $2,500
                  - generic [ref=e85]: 2672 seats available
                - link "Book Now" [ref=e86]:
                  - /url: /events/284
          - article [ref=e87]:
            - generic [ref=e88]:
              - img "World Tech Summit" [ref=e89]
              - generic [ref=e90]: Conference
              - generic [ref=e92]: Featured
            - generic [ref=e93]:
              - link [ref=e94]:
                - /url: /events/283
                - heading "World Tech Summit" [level=3] [ref=e95]
              - generic [ref=e96]:
                - generic [ref=e97]: Sat, 18 Apr
                - generic [ref=e101]: Hyderabad, Hitech city, Hyderabad
              - generic [ref=e105]:
                - generic [ref=e106]:
                  - paragraph [ref=e107]: $1,500
                  - generic [ref=e108]: 8 seats left!
                - link "Book Now" [ref=e109]:
                  - /url: /events/283
          - article [ref=e110]:
            - generic [ref=e111]:
              - img "Test Event 1791767275802" [ref=e112]
              - generic [ref=e113]: Festival
            - generic [ref=e115]:
              - link [ref=e116]:
                - /url: /events/16910
                - heading "Test Event 1791767275802" [level=3] [ref=e117]
              - generic [ref=e118]:
                - generic [ref=e119]: Tue, 10 Nov
                - generic [ref=e123]: Convention Center, Austin
              - generic [ref=e127]:
                - generic [ref=e128]:
                  - paragraph [ref=e129]: $120
                  - generic [ref=e130]: 20000 seats available
                - link "Book Now" [ref=e131]:
                  - /url: /events/16910
          - article [ref=e132]:
            - generic [ref=e133]:
              - img "Test Event 1791761774353" [ref=e134]
              - generic [ref=e135]: Workshop
            - generic [ref=e137]:
              - link [ref=e138]:
                - /url: /events/16887
                - heading "Test Event 1791761774353" [level=3] [ref=e139]
              - generic [ref=e140]:
                - generic [ref=e141]: Tue, 10 Nov
                - generic [ref=e145]: Stadium, Chicago
              - generic [ref=e149]:
                - generic [ref=e150]:
                  - paragraph [ref=e151]: $90
                  - generic [ref=e152]: 5000 seats available
                - link "Book Now" [ref=e153]:
                  - /url: /events/16887
          - article [ref=e154]:
            - generic [ref=e155]:
              - img "Test Event 1791761747612" [ref=e156]
              - generic [ref=e157]: Concert
            - generic [ref=e159]:
              - link [ref=e160]:
                - /url: /events/16886
                - heading "Test Event 1791761747612" [level=3] [ref=e161]
              - generic [ref=e162]:
                - generic [ref=e163]: Tue, 10 Nov
                - generic [ref=e167]: Stadium, Austin
              - generic [ref=e171]:
                - generic [ref=e172]:
                  - paragraph [ref=e173]: $199
                  - generic [ref=e174]: 10000 seats available
                - link "Book Now" [ref=e175]:
                  - /url: /events/16886
      - generic [ref=e177]:
        - heading "Ready to experience something new?" [level=2] [ref=e178]
        - paragraph [ref=e179]: Browse thousands of events across India. Book tickets in seconds.
        - link [ref=e180]:
          - /url: /events
          - button "Explore All Events" [ref=e181] [cursor=pointer]
  - contentinfo [ref=e182]:
    - generic [ref=e183]:
      - generic [ref=e184]:
        - generic [ref=e185]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e186]
          - paragraph [ref=e187]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e188]:
          - heading "Popular Courses" [level=3] [ref=e189]
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "Selenium WebDriver with Java" [ref=e192]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e193]:
              - link "Playwright with JavaScript" [ref=e194]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e195]:
              - link "RestAssured API Testing" [ref=e196]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e197]:
              - link "Cypress End-to-End Testing" [ref=e198]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e199]:
              - link "Appium Mobile Testing" [ref=e200]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e201]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e202]
          - paragraph [ref=e203]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e204]:
            - /url: https://techsmarthire.com
        - generic [ref=e205]:
          - heading "EventHub Practice App" [level=3] [ref=e206]
          - list [ref=e207]:
            - listitem [ref=e208]:
              - link "Browse Events" [ref=e209]:
                - /url: /events
            - listitem [ref=e210]:
              - link "My Bookings" [ref=e211]:
                - /url: /bookings
            - listitem [ref=e212]:
              - link "Manage Events" [ref=e213]:
                - /url: /admin/events
            - listitem [ref=e214]:
              - link "API Documentation" [ref=e215]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e216]:
        - paragraph [ref=e217]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e218]:
          - link "rahulshettyacademy.com →" [ref=e219]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e220]:
            - /url: https://techsmarthire.com
  - alert [ref=e221]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Types of Selectors', async ({ page }) => {
  4  |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  5  |   await page.getByLabel('email').fill('student@example.com');
  6  |   await page.getByPlaceholder('••••••').fill('secret123');
  7  |   await page.getByRole('button', {name: 'Sign In'}).click();
  8  |   //await expect(page.getByTitle('EventHub — Discover & Book Events')).toBeVisible();
  9  |   await expect(page.getByText('Home')).toBeVisible();
  10 |   await expect(page.getByAltText('Dilli Diwali Mela')).toBeVisible();
  11 |   await expect(page.getByTestId('nav-events')).toBeVisible();
> 12 |   await page.locator('//*[@ud="nav-bookings"]').click(); //xpath --- error
     |                                                 ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  13 |   await page.locator('#nav-events').click(); //css - preferred
  14 | })
```