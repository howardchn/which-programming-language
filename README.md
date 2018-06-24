It has been a long time I haven’t write st. Here is one thing I’m caring about these days. I reviewed all [my projects in github](https://github.com/howardchn?tab=repositories), and I found one interesting [mini app](https://github.com/howardchn/chooselangguide) I built few years ago. It helps to get a programming language who is proper to learn. I remember when I initially built it, I'm pretty excited on how they way I built it and it looks like. But few monthes later, I picked this up and review this; I could say it sucks. In another word, I'm kindly improved myself in some aspects, especially consider in user's standpoint and software structure. 

# The purpose for this blog and who could read the following content
The main purpose that I write this down is that, I want to see my improvement and make it a checkpoint of it. You know, in the developer's world, if you think your code seems awful and has a lot of space to refactor, that means you already improved your self; and it encourages me to learn more in the near future.

On the other hand, if you are a starter to build apps, the following content might have some points you could consider. You know that the app you are working on is not for your self, consider as more as possible in user's standpoint to make it convenient to use and lower the risky users might be careful  when using the app.

# Round 1 - overview
I already found there are thousands of users has tried this app (it is pretty low number, but I'm satisify with it); when I reviewed thie records, I could say, many people just interesting in the first half an hour, then never get back. Why this happens? It seems a practise and challenge I will take.

![main page](https://github.com/howardchn/chooselangguide/raw/master/preview-1.png)

This is a preview of the app. When I enter this page, I found several issues.
1. The major point is that, why I need user name in the first page? I doesn't useful for my statistics. I will get rid of it first or move it to the end if someone wants to leave names to encourage me.
2. What's this app for? There is no brief introduction about this. So a simple short introduction is necessary.
3. The title is too lang. Consider to make it shorter.
4. It is not friendly to web browser. Don't have too much idea for this. Consider it later.

For the result page, you will only get the name of the programming language. Henn... If I could get more detail about the programming language, that would be better. For example, we could provide following items.
1. The feature of it.
2. The difficulty of learning it.
3. The popularity of this language.
4. Which big company is using this technology.

That's it for the overview.

# Round 2 - implementation
Generally, this is implemented with vuejs + bootstrap + express (node) + mysql.

![old structure](https://github.com/howardchn/chooselangguide/raw/master/structure-old.png)

This is a popular architecture for a normal or even enterprise usage. To be honest, when I design this, my initial imagination is this, so I processed in this way without any doubt.

This time, I found it could much simpler. For the architecture designing, _there is not a best architecture, but only has the proper architecture_. I could choose a popular architecture for your app, but it might not the proper one; it might make your development and maintainance harder.

#### Get rid of the backend
I already found my mini app is not necessary to have express and nodejs involved. The only purpose for add this level is that, I could add a Sqlite support and store the count of how many people prefers a specific language. To fix this, I searched on google, and found some solutions with some free cloud storage service. [Leancloud](https://leancloud.cn) is the one I used. Leancloud provides me an ability to store/fetch simple data object to cloud and easy to backup. It is pretty nice.

After this simplification, I can get rid of the backend part, then I can only focus on the front end part.

#### Improve frontend
It is hard to describe. Frontend is fansy and lots of technology and framework. Although I choose _vuejs_ as basic framework, but the question is "am I using it the correct way?". I might have another blog to represent this vuejs refactor experience.

About the _pack and deployment_, I used to use [gulp](https://gulpjs.com). With this, I can define several gulp tasks and group the tasks together for building, deployment etc. After I learned _webpack_, I found it is my favorite one. I don't need to copy many gulp tasks from one project to another; I don't need to define many customized tasks; I can merge my css files, styles and many js modules to one file to ship it out... I will try to use webpack unless something it doesn't support.

#### Deployment
The deloyment is a headache before. Due to the Sqlite and express level, I need to setup a web server on linux host. It is pretty expensive. Fortunately, I have one, so I can host it in my existing host. While now, I removed the backend support, this app becomes a pure static web app. I can host it on [github](https://github.com/howardchn/which-programming-language/tree/master/app) and ship it with [github pages](http://howardchn.github.io/which-programming-language) without extra cost.

# Follow up and wrap up
At this step, I'm satisfy with current refactor. But there are still st. I can improve more. I will do it once I have time with following improvement.
1. Add a statistics on represents a ratio of the programming language.
2. Allow to leave message.
3. Allow to share the result on wechat or some popular social apps.
4. Check the result of your history.
5. Any suggestion from feedback.