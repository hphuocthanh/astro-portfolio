---
title: "Another rant about React useContext, Redux Toolkit and Zustand"
publishedAt: 2022-03-24
description: "State management is annoying, even when selecting the right tool for it."
slug: "react-state-management-ranting"
isPublish: true
---

The choice of state management has been a 🔥 potato in the React community for the longest time. I remember when I first got into React, people would defend Context against Redux for so many reasons (my first job was to handle authentication in Redux saga, zikes!). Now, many are flexing their short lines of code using Zustand.

Adding to this heated debate, I want to make some constructive criticisms about state management in React (or just ranting in general).

## TL;DR

Redux Toolkit for ease of adoption and for large-scaled applications. Medium and small-sized applications should use lightweight tools like Zustand. Ignore useContext once you understand how it works.

## Why not useContext?

I wouldn't say Context API is a bad choice to use for any state-related issues. It is a good introduction and get you to dive deeper into the React ecosystem (I got asked about it several times in interviews as well). However, it is [not really intended for such use cases](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/#why-context-is-not-state-management).

For a hobbyist project (e.g. develop a manhwa collection app), you may try Context. I wouldn't recommend implementing it for any other things, especially if your task is to optimise existing features. Simply because, you cannot conduct any proper rendering testing with Context (FYI, Redux has its own [devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for this).

## So, is Redux still good?

Short answer, yes. You can easily use it for any types of applications. With its matured documentation and resources, you hardly encounter bugs when using it. Even if you do (unlucky you, but that's just everyone), the vast community of Redux and that random Stackoverflow user from 5 years ago would already have posted the issue that you have.

## But why you shouldn't use Redux

Despite its popularity and stability, Redux still introduces a lot of [boilerplate](https://redux-toolkit.js.org/tutorials/quick-start) (and don't get me started on its integration with Typescript).

Another deal breaker of Redux is its added complexity for beginners. If someone with a heavy background of Backend starts using Redux right away, they might find actions, reducers and slices a bit challenging.

## Zustand is that friendly state management framework

Zustand, I must say, is pretty cool to use. It is simple and quick to set up, which makes it ideal for any performance-focused applications. The only downside to it is that once your application grows to a billion-user one, it can be difficult to maintain the application (but let's face it, it's not really a concern for us, yea?).

So, check [it](https://github.com/pmndrs/zustand) out!

## Honarable mention: React Query

I have been able to mess with [React Query](https://tanstack.com/query/v3/) for some personal projects. It is a fantasic choice if your application relies heavily on *fresh* data (e.g. eCommerce products page, status updates...).

The configuration options are comprehensive as well. So, give it a go if you are building the next Shopee!

## Summary

I think TL;DR is already enough to summarise my thoughts. Thanks for reading!

