# BCS Webapp for Technicians

## [Acces it here] (https://earphone.github.io/BCS)

### To Do
- [x] Find Database (FIREBASE)
- [x] Figure out and setup login and logout
- [/] Setup Database structure
- [X] Signup page
- [X] DPR page
- [ ] DTR page
- [ ] Admin page
- [ ] Profile page
- [ ] Possible Timesheet page
- [ ] Download to PDF (preferably create template to look exactly like current version)

### Challenges
##### There were many challenges that had to be overcome over the course of this project
Finding a reliable backend was one of the most important decisions for this project because how everything would be saved as well as structured in my scripts all depended on this.
At first I started using Kinvey as the backend, but it did not work well for some reason with my template that I was using. I completely chuck it up to my lack of experience of
the more advance workings of javasciprt. After some more research, I found that Google's Firebase would be a good fit, it even has the functionality of real-time database updating.
Since this is Google we're dealing with, the documentation for signing up and logging in were very easy to understand and took almost no time at all to implement. Something that
did take some extra time to do was figuring out that for some reason, I was unable to sign up on the same page that I wanted extra user data input that is not part of the actual
"user" data. This required me to send the user to a new-profile page where all the extra data that I needed would be entered.



#### We use [Firebase] (https://firebase.google.com/) as our backend.

#### Created Using the template [Start Bootstrap](http://startbootstrap.com/) - [SB Admin 2](http://startbootstrap.com/template-overviews/sb-admin-2/)

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

##### Copyright and License for Start Bootstrap

Copyright 2013-2016 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-sb-admin-2/blob/gh-pages/LICENSE) license.
