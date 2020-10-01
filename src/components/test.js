import React, { Component, useState, useEffect } from "react";

function Test(str) {
  str = "test";
  alert(typeof str);
  let bean = str;
  bean
    .map((letter) => {
      if (letter == "&") {
        return (letter = letter + "amp;");
      }
    })
    .join();
  return bean;
}

export default Test;
