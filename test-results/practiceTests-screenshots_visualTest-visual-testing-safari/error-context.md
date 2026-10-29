# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practiceTests\screenshots_visualTest.spec.js >> visual testing
- Location: tests\practiceTests\screenshots_visualTest.spec.js:15:5

# Error details

```
Error: A snapshot doesn't exist at C:\Playwright_projects\Personal_projects\playwright_practice_session\tests\practiceTests\screenshots_visualTest.spec.js-snapshots\landingPage-safari-win32.png, writing actual.
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
        - link "html file" [ref=e10]:
          - /url: /examples/index
        - text: and
        - link "css file" [ref=e11]:
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
        - link "CSS Resource Guide" [ref=e25]:
          - /url: /pages/resources/
        - text: for advanced tutorials and tips on working with CSS.
      - paragraph [ref=e26]: You may modify the style sheet in any way you wish, but not the HTML. This may seem daunting at first if you’ve never worked this way before, but follow the listed links to learn more, and use the sample files as a guide.
      - paragraph [ref=e27]:
        - text: Download the sample
        - link "HTML" [ref=e28]:
          - /url: /examples/index
        - text: and
        - link "CSS" [ref=e29]:
          - /url: /examples/style.css
        - text: to work on a copy locally. Once you have completed your masterpiece (and please, don’t submit half-finished work) upload your CSS file to a web server under your control.
        - link "Send us a link" [ref=e30]:
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
        - link "submission guidelines" [ref=e40]:
          - /url: /pages/submit/guidelines/
        - text: ), but we ask you release your CSS under a Creative Commons license identical to the
        - link "one on this site" [ref=e41]:
          - /url: http://creativecommons.org/licenses/by-nc-sa/3.0/
        - text: so that others may learn from your work.
      - contentinfo [ref=e42]:
        - text: By
        - link "Dave Shea" [ref=e43]:
          - /url: http://www.mezzoblue.com/
        - text: . Bandwidth graciously donated by
        - link "mediatemple" [ref=e44]:
          - /url: http://www.mediatemple.net/
        - text: ". Now available:"
        - link "Zen Garden, the book" [ref=e45]:
          - /url: http://www.amazon.com/exec/obidos/ASIN/0321303474/mezzoblue-20/
        - text: .
    - generic [ref=e46]:
      - link "HTML" [ref=e47]:
        - /url: http://validator.w3.org/check/referer
      - link "CSS" [ref=e48]:
        - /url: http://jigsaw.w3.org/css-validator/check/referer
      - link "CC" [ref=e49]:
        - /url: http://creativecommons.org/licenses/by-nc-sa/3.0/
      - link "A11y" [ref=e50]:
        - /url: http://mezzoblue.com/zengarden/faq/#aaa
      - link "GH" [ref=e51]:
        - /url: https://github.com/mezzoblue/csszengarden.com
  - complementary [ref=e52]:
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading "Select a Design:" [level=3] [ref=e55]
        - navigation [ref=e56]:
          - list:
            - listitem [ref=e57]:
              - text: "1"
              - link "Mid Century Modern" [ref=e58]:
                - /url: /221/
              - text: by
              - link "Andrew Lohman" [ref=e59]:
                - /url: http://andrewlohman.com/
            - listitem [ref=e60]:
              - text: "2"
              - link "Garments" [ref=e61]:
                - /url: /220/
              - text: by
              - link "Dan Mall" [ref=e62]:
                - /url: http://danielmall.com/
            - listitem [ref=e63]:
              - text: "3"
              - link "Steel" [ref=e64]:
                - /url: /219/
              - text: by
              - link "Steffen Knoeller" [ref=e65]:
                - /url: http://steffen-knoeller.de
            - listitem [ref=e66]:
              - text: "4"
              - link "Apothecary" [ref=e67]:
                - /url: /218/
              - text: by
              - link "Trent Walton" [ref=e68]:
                - /url: http://trentwalton.com
            - listitem [ref=e69]:
              - text: "5"
              - link "Screen Filler" [ref=e70]:
                - /url: /217/
              - text: by
              - link "Elliot Jay Stocks" [ref=e71]:
                - /url: http://elliotjaystocks.com/
            - listitem [ref=e72]:
              - text: "6"
              - link "Fountain Kiss" [ref=e73]:
                - /url: /216/
              - text: by
              - link "Jeremy Carlson" [ref=e74]:
                - /url: http://jeremycarlson.com
            - listitem [ref=e75]:
              - text: "7"
              - link "A Robot Named Jimmy" [ref=e76]:
                - /url: /215/
              - text: by
              - link "meltmedia" [ref=e77]:
                - /url: http://meltmedia.com/
            - listitem [ref=e78]:
              - text: "8"
              - link "Verde Moderna" [ref=e79]:
                - /url: /214/
              - text: by
              - link "Dave Shea" [ref=e80]:
                - /url: http://www.mezzoblue.com/
      - generic [ref=e81]:
        - heading "Archives:" [level=3] [ref=e82]
        - navigation [ref=e83]:
          - list [ref=e84]:
            - listitem [ref=e85]:
              - link "Next Designs ›" [ref=e86]:
                - /url: /221/page1
            - listitem [ref=e87]:
              - link "View All Designs" [ref=e88]:
                - /url: /pages/alldesigns/
      - generic [ref=e89]:
        - heading "Resources:" [level=3] [ref=e90]
        - list [ref=e91]:
          - listitem [ref=e92]:
            - link "View This Design’s CSS" [ref=e93]:
              - /url: /221/221.css
          - listitem [ref=e94]:
            - link "CSS Resources" [ref=e95]:
              - /url: /pages/resources/
          - listitem [ref=e96]:
            - link "FAQ" [ref=e97]:
              - /url: /pages/faq/
          - listitem [ref=e98]:
            - link "Submit a Design" [ref=e99]:
              - /url: /pages/submit/
          - listitem [ref=e100]:
            - link "Translations" [ref=e101]:
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
     |                                     ^ Error: A snapshot doesn't exist at C:\Playwright_projects\Personal_projects\playwright_practice_session\tests\practiceTests\screenshots_visualTest.spec.js-snapshots\landingPage-safari-win32.png, writing actual.
  18 | });
```