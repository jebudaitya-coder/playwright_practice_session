# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practiceTests\screenshots_visualTest.spec.js >> visual testing
- Location: tests\practiceTests\screenshots_visualTest.spec.js:15:5

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  9909 pixels (ratio 0.02 of all image pixels) are different.

  Snapshot: landingPage.png

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - heading "CSS Zen Garden" [level=1] [ref=e5]
      - heading "The Beauty of CSS Design" [level=2] [ref=e6]
    - article [ref=e7]:
      - paragraph [ref=e8]: A demonstration of what can be accomplished through CSS-based design. Select any style sheet from the list to load it into this page.
      - paragraph [ref=e9]:
        - text: Download the example
        - link "html file" [ref=e10] [cursor=pointer]:
          - /url: /examples/index
        - text: and
        - link "css file" [ref=e11] [cursor=pointer]:
          - /url: /examples/style.css
    - article [ref=e12]:
      - heading "The Road to Enlightenment" [level=3] [ref=e13]
      - paragraph [ref=e14]: Littering a dark and dreary road lay the past relics of browser-specific tags, incompatible DOMs, broken CSS support, and abandoned browsers.
      - paragraph [ref=e15]: We must clear the mind of the past. Web enlightenment has been achieved thanks to the tireless efforts of folk like the W3C, WaSP, and the major browser creators.
      - paragraph [ref=e16]: The CSS Zen Garden invites you to relax and meditate on the important lessons of the masters. Begin to see with clarity. Learn to use the time-honored techniques in new and invigorating fashion. Become one with the web.
  - main [ref=e17]:
    - article [ref=e18]:
      - heading "So What is This About?" [level=3] [ref=e19]
      - paragraph [ref=e20]: There is a continuing need to show the power of CSS. The Zen Garden aims to excite, inspire, and encourage participation. To begin, view some of the existing designs in the list. Clicking on any one will load the style sheet into this very page. The HTML remains the same, the only thing that has changed is the external CSS file. Yes, really.
      - paragraph [ref=e21]: CSS allows complete and total control over the style of a hypertext document. The only way this can be illustrated in a way that gets people excited is by demonstrating what it can truly be, once the reins are placed in the hands of those able to create beauty from structure. Designers and coders alike have contributed to the beauty of the web; we can always push it further.
    - article [ref=e22]:
      - heading "Participation" [level=3] [ref=e23]
      - paragraph [ref=e24]:
        - text: Strong visual design has always been our focus. You are modifying this page, so strong CSS skills are necessary too, but the example files are commented well enough that even CSS novices can use them as starting points. Please see the
        - link "CSS Resource Guide" [ref=e25] [cursor=pointer]:
          - /url: /pages/resources/
        - text: for advanced tutorials and tips on working with CSS.
      - paragraph [ref=e26]: You may modify the style sheet in any way you wish, but not the HTML. This may seem daunting at first if you’ve never worked this way before, but follow the listed links to learn more, and use the sample files as a guide.
      - paragraph [ref=e27]:
        - text: Download the sample
        - link "HTML" [ref=e28] [cursor=pointer]:
          - /url: /examples/index
        - text: and
        - link "CSS" [ref=e29] [cursor=pointer]:
          - /url: /examples/style.css
        - text: to work on a copy locally. Once you have completed your masterpiece (and please, don’t submit half-finished work) upload your CSS file to a web server under your control.
        - link "Send us a link" [ref=e30] [cursor=pointer]:
          - /url: /pages/submit/
        - text: to an archive of that file and all associated assets, and if we choose to use it we will download it and place it on our server.
    - article [ref=e31]:
      - heading "Benefits" [level=3] [ref=e32]
      - paragraph [ref=e33]: Why participate? For recognition, inspiration, and a resource we can all refer to showing people how amazing CSS really can be. This site serves as equal parts inspiration for those working on the web today, learning tool for those who will be tomorrow, and gallery of future techniques we can all look forward to.
    - article [ref=e34]:
      - heading "Requirements" [level=3] [ref=e35]
      - paragraph [ref=e36]: Where possible, we would like to see mostly CSS 1 & 2 usage. CSS 3 & 4 should be limited to widely-supported elements only, or strong fallbacks should be provided. The CSS Zen Garden is about functional, practical CSS and not the latest bleeding-edge tricks viewable by 2% of the browsing public. The only real requirement we have is that your CSS validates.
      - paragraph [ref=e37]: Luckily, designing this way shows how well various browsers have implemented CSS by now. When sticking to the guidelines you should see fairly consistent results across most modern browsers. Due to the sheer number of user agents on the web these days — especially when you factor in mobile — pixel-perfect layouts may not be possible across every platform. That’s okay, but do test in as many as you can. Your design should work in at least IE9+ and the latest Chrome, Firefox, iOS and Android browsers (run by over 90% of the population).
      - paragraph [ref=e38]: We ask that you submit original artwork. Please respect copyright laws. Please keep objectionable material to a minimum, and try to incorporate unique and interesting visual themes to your work. We’re well past the point of needing another garden-related design.
      - paragraph [ref=e39]:
        - text: This is a learning exercise as well as a demonstration. You retain full copyright on your graphics (with limited exceptions, see
        - link "submission guidelines" [ref=e40] [cursor=pointer]:
          - /url: /pages/submit/guidelines/
        - text: ), but we ask you release your CSS under a Creative Commons license identical to the
        - link "one on this site" [ref=e41] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by-nc-sa/3.0/
        - text: so that others may learn from your work.
      - contentinfo [ref=e42]:
        - text: By
        - link "Dave Shea" [ref=e43] [cursor=pointer]:
          - /url: https://daveshea.com/
        - text: ". Now available:"
        - link "Zen Garden, the book" [ref=e44] [cursor=pointer]:
          - /url: https://www.amazon.com/exec/obidos/ASIN/0321303474/mezzoblue-20/
        - text: .
    - generic [ref=e45]:
      - link "HTML" [ref=e46] [cursor=pointer]:
        - /url: https://validator.w3.org/check/referer
      - link "CSS" [ref=e47] [cursor=pointer]:
        - /url: https://jigsaw.w3.org/css-validator/check/referer
      - link "CC" [ref=e48] [cursor=pointer]:
        - /url: https://creativecommons.org/licenses/by-nc-sa/3.0/
      - link "A11y" [ref=e49] [cursor=pointer]:
        - /url: https://www.csszengarden.com/pages/faq/#:~:text=Is%20the%20CSS%20Zen%20Garden%20fully%20accessible
      - link "GH" [ref=e50] [cursor=pointer]:
        - /url: https://github.com/mezzoblue/csszengarden.com
  - complementary [ref=e51]:
    - generic [ref=e52]:
      - generic [ref=e53]:
        - heading "Select a Design:" [level=3] [ref=e54]
        - navigation [ref=e55]:
          - list:
            - listitem [ref=e56]:
              - text: "1"
              - link "Mid Century Modern" [ref=e57] [cursor=pointer]:
                - /url: /221/
              - text: by
              - link "Andrew Lohman" [ref=e58] [cursor=pointer]:
                - /url: https://andrewlohman.com/
            - listitem [ref=e59]:
              - text: "2"
              - link "Garments" [ref=e60] [cursor=pointer]:
                - /url: /220/
              - text: by
              - link "Dan Mall" [ref=e61] [cursor=pointer]:
                - /url: https://web.archive.org/web/20160531100638/http://danielmall.com/
            - listitem [ref=e62]:
              - text: "3"
              - link "Steel" [ref=e63] [cursor=pointer]:
                - /url: /219/
              - text: by
              - link "Steffen Knoeller" [ref=e64] [cursor=pointer]:
                - /url: https://steffen-knoeller.de
            - listitem [ref=e65]:
              - text: "4"
              - link "Apothecary" [ref=e66] [cursor=pointer]:
                - /url: /218/
              - text: by
              - link "Trent Walton" [ref=e67] [cursor=pointer]:
                - /url: https://trentwalton.com
            - listitem [ref=e68]:
              - text: "5"
              - link "Screen Filler" [ref=e69] [cursor=pointer]:
                - /url: /217/
              - text: by
              - link "Elliot Jay Stocks" [ref=e70] [cursor=pointer]:
                - /url: https://elliotjaystocks.com/
            - listitem [ref=e71]:
              - text: "6"
              - link "Fountain Kiss" [ref=e72] [cursor=pointer]:
                - /url: /216/
              - text: by
              - link "Jeremy Carlson" [ref=e73] [cursor=pointer]:
                - /url: https://jeremycarlson.com
            - listitem [ref=e74]:
              - text: "7"
              - link "A Robot Named Jimmy" [ref=e75] [cursor=pointer]:
                - /url: /215/
              - text: by
              - link "meltmedia" [ref=e76] [cursor=pointer]:
                - /url: https://meltmedia.com/
            - listitem [ref=e77]:
              - text: "8"
              - link "Verde Moderna" [ref=e78] [cursor=pointer]:
                - /url: /214/
              - text: by
              - link "Dave Shea" [ref=e79] [cursor=pointer]:
                - /url: https://daveshea.com/
      - generic [ref=e80]:
        - heading "Archives:" [level=3] [ref=e81]
        - navigation [ref=e82]:
          - list [ref=e83]:
            - listitem [ref=e84]:
              - link "Next Designs ›" [ref=e85] [cursor=pointer]:
                - /url: /221/page1
            - listitem [ref=e86]:
              - link "View All Designs" [ref=e87] [cursor=pointer]:
                - /url: /pages/alldesigns/
      - generic [ref=e88]:
        - heading "Resources:" [level=3] [ref=e89]
        - list [ref=e90]:
          - listitem [ref=e91]:
            - link "View This Design’s CSS" [ref=e92] [cursor=pointer]:
              - /url: /221/221.css
          - listitem [ref=e93]:
            - link "CSS Resources" [ref=e94] [cursor=pointer]:
              - /url: /pages/resources/
          - listitem [ref=e95]:
            - link "FAQ" [ref=e96] [cursor=pointer]:
              - /url: /pages/faq/
          - listitem [ref=e97]:
            - link "Submit a Design" [ref=e98] [cursor=pointer]:
              - /url: /pages/submit/
          - listitem [ref=e99]:
            - link "Translations" [ref=e100] [cursor=pointer]:
              - /url: /pages/translations/
```

# Test source

```ts
  1  | import {test, page, browser, expect} from '@playwright/test'
  2  | 
  3  | test.skip('screenshots',async({page}) => {
  4  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  5  |     await page.screenshot({path:"beforeTyping.png"});
  6  |     await page.locator('#displayed-text').screenshot({path:"elementBefore.png"})
  7  |     await page.locator('#displayed-text').fill('hello! is this text visible?')
  8  |     await page.screenshot({path:"afterTyping.png"});
  9  |     await page.locator('#displayed-text').screenshot({path:"elementAfter.png"})
  10 |     await expect(page.locator('#displayed-text')).toBeVisible();
  11 |     await page.locator('#hide-textbox').click()
  12 |     await expect(page.locator('#displayed-text')).toBeHidden();
  13 | });
  14 | 
  15 | test('visual testing',async({page}) => {
  16 |     await page.goto("https://csszengarden.com/221/");
> 17 |     expect(await page.screenshot()).toMatchSnapshot('landingPage.png')
     |                                     ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  18 | });
```