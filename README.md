> DISCLAIMER: UnSplash Pro is in no way **_legally_** related to UnSplash

## What Why ??

Before we begin, I'd like to emphasis that the `Pro` in `UnSplash Pro` stands for `Programmer` and not ...pro(whatever that stands for😝).

You see programmers have certain characteristics attributes:

1. They are super lazy
2. They love `ctrl+c`&`ctrl+v`
3. They hate choosing colors and pictures

They hate needing to go out just to snap, edit and process pictures so they can use it in some website
(like whoTF even does that anyways😂)

The point is they hate even doing these series of ultra simple steps:

1. Choose pic from UnSplash
2. Downloading pic from UnSplash
3. Move downloaded pic to the project repo
4. Type `<img src="./pathToPic"/>` (and not to mention the alt)

It'd be like **_heaven_** if they had a **tool** of sorts that they could just **copy** the **whole `<img/>`tag** from.

and that's the problem UnSplash Pro solves.

## How ?

![ScreenShot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ven5pi02le49m7dw7rw1.png)
Contrary to your belief, this is actually a really simple project
Check It Out @ [UnSplash Pro](https://unsplashpro.netlify.app/)

### What I used to make it

1. **React**: So I could reuse a few of my previously built stuff
2. **FlexBox**: Come on that's my greatest flex💪, I can't do any CSS without it

### Code Style (for Contributors)

Now I've used **class components** for the whole project. I know I'm prolly the only person alive who still uses class components.

I have my reasons so here me out on this:
Hooks makes the whole thing easier, but you only **understand components**, when you know **what's going on under the hood** and hence the project was built with class components.

### So how does the copy as a html tag work

It's really just a **template string** copied to the **clipboard**.
![CopyHTML](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/921yg77qz023j3eoqw7l.png)
with the imageURL and description are from the **unSplash API**

### But, What if I want to download/copy just the URL

Don't worry unSplash Pro has got you covered.

1. The Download
   This is kinda complex but still pretty easy.
   It uses **filesaver.js** that converts the **image** to a **blob** and then sent into your **downloads folder**.
   ![download](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nr9x2bhmxuj0zemprrfe.png)
   The first argument to `filesaver.saveAs()` is the **path/URL** of the image, while the second argument specifies the **name** of the **to-be-downloaded file**.

2. Copy URL
   This one is almost exactly the same way we copy HTML code snippets
   ![CopyURL](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/biu7fapu1ihxpxgw1q0f.png)

## Conclusions

I think now's the best time to **apologize**...
I'm **super sorry** for including **images of the code**, as a programmer I know you'd be wanting to be able to `ctrl+c`&`ctrl+v`, but I'm a programmer too and **I'm too lazy** to

1. Go Up
2. Delete the Images
3. Make ` `
4. Pasted the Code

If you had fun reading this... here's my [@twitter](https://twitter.com/LucidMach) and [@insta](https://www.instagram.com/lucidmach/)
Smash that 👍 button (even tho it doesn't exist on dev.to)
