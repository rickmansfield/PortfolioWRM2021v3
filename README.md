# About Rick Mansfield
## [Visit this live site](https://mansfield-port-v3.netlify.app/)
### Hi there 👋

<!--
**rickmansfield/rickmansfield** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 😄 Pronouns: ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- ⚡ Fun fact: ...
-->

- 💬 Ask me about coding and I may never shut up. LOL
- 📫 How to reach me: [Resume](https://resume.creddle.io/resume/4uxc0m7zngm) or [LinkedIn](https://www.linkedin.com/in/peacefulrick/)
- 😄 [See My PORTFOLIO](https://mansfield-port-v3.netlify.app/)
- ⚡ Fun fact: ...really wanted to obtain the domain name VikingsCode.com since my family descended from Germanic Vikings!

## Skills:
### FRONTEND: 
- HTML, CSS, Javascript, C#, ASP.Net, React.js, Redux, Hooks, Context API, Jest, Yum, Axios, Ant Design, RESTful API Design, JSX
### BACKEND:
- Node.js, Express, SQL, PostgreSQL, Python, Git CLI, VS Code, Vercel, Heroku, Netlify, Postman
### ADDITIONAL SKILLS:
- Agile Project Management, Algorithms, Architecture, Debugging, Deployment, Technical Project Management

    ![Vikings Code](/src/photos/Rick-n-Sara-Vikings2jpg.jpg)

## Contributors
- I'd like to formally thank [Devin Mitchel](devin.a.mitchell@gmail.com) for providing me with the base design to this project. He was an integral part in this overall product.  

### ooohhh fun secret checkbox... try it out!
## Fun facts about this project You may use...Click the checkbox next to my name to see a second option for navigation.
 
The reason `Nav1.js` doesn't need `sectionRefs` and `scrollToSection` like `Nav2.js` is due to the way these two components handle navigation:


1. **`Nav1.js` uses anchor links (`<a href="#Projects">`)**:
   - Anchor links rely on the browser’s built-in behavior to scroll to the target section of the page with matching `id` attributes.
   - For example, `<a href="#Projects">Projects</a>` will automatically scroll the page to the section with `id="Projects"` without needing any JavaScript to manage the scroll behavior.
   - The browser takes care of this by jumping directly to the target section when the user clicks the link.

2. **`Nav2.js` uses JavaScript with `scrollToSection()`**:
   - Instead of relying on anchor links, `Nav2.js` manually triggers the scrolling behavior using the `scrollToSection` function.
   - This approach allows more control over the scrolling (e.g., smooth scrolling) by programmatically calling `scrollToSection(sectionRef)` to scroll to the specific section.

### Why Both Work:
- **`Nav1.js`** is simpler because it uses the default behavior of anchor links, which automatically work as long as there are matching `id` attributes in the sections (e.g., `<div id="Projects">`).
- **`Nav2.js`** requires `scrollToSection` and `sectionRefs` because it doesn't rely on anchor links. Instead, it manually calls the scrolling logic using JavaScript, which allows more customization (e.g., smooth scrolling and handling events).

### When to Use Each Approach:
- **Anchor links (`Nav1.js`)**: Best for simple, default navigation behavior.
- **JavaScript-based scrolling (`Nav2.js`)**: Useful when you need more control over how and when scrolling happens (e.g., smooth scrolling or custom scroll behavior).