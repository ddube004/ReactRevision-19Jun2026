import React from "react";
import {
  BrowserRouter as GrandParent,
  Routes as Parent,
  Route as Child,
} from "react-router-dom";


import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Index from "./pages/Index";

export default function App() {
  return (
    <GrandParent>
      <Parent>
        <Child path="/" element={<Layout />}>
    

          <Child index element={<Index/>}></Child>
          <Child path="post" element={<Post />}></Child>
          <Child path="about" element={<About />}></Child>
          <Child path="contact" element={<Contact />}></Child>
          <Child path="*" element={<NotFound />}></Child>
        </Child>
      </Parent>
    </GrandParent>
  );
}
