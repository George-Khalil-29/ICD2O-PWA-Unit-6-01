// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

function calculate() {
const lengthAString = document.getElementById("lengthAString").value
const lengthBString = document.getElementById("lengthBString").value
const lengthCString = document.getElementById("lengthCString").value

const lengthA = parseFloat(lengthAString)
const lengthB = parseFloat(lengthBString)
const lengthC = parseFloat(lengthCString)

// using the cosine law
const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)

const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))
const angleKind = document.getElementById("angleKind")

if (angleA != angleB != angleC) {
  document.getElementById("angleKind").innerHTML = "triangle Kind: Isosceles Triangle"
} else if (angleA == angleB == angleC) {
  document.getElementById("angleKind").innerHTML = "triangle Kind: Scalene Triangle"
} else if (angleA = angleC) {
  document.getElementById("angleKind").innerHTML = "triangle Kind: Equilateral Triangle"
}


console.log(angleA)
console.log(angleB)
console.log(angleC)
console.log(sumOfAngles)
console.log(angleKind)

document.getElementById("sumOfAngles").innerHTML = "The sum of Angles is:" + sumOfAngles.toFixed(2)
document.getElementById("angleA").innerHTML = "Angle A is:" + angleA.toFixed(2)
document.getElementById("angleB").innerHTML = "Angle B is:" + angleB.toFixed(2)
document.getElementById("angleC").innerHTML = "Angle C is:" + angleC.toFixed(2)

}
