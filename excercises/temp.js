/*
GET height

Loop hieght times
print " ".repeat(i - hieght times) + "*".repeat(i + height times)

*/

function triangle(height) {
  for (let i = 1; i <= height; i += 1) {
    console.log(' '.repeat(height - i) + '*'.repeat(i));
  }
}

triangle(10);