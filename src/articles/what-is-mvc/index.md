---
title: "[Dev Tip] MVC คืออะไร ?"
image: "./whatisMVCSign.png"
category: Tutorial
excerpt: "ถ้าพูดถึง MVC หลาย ๆ คนน่าจะเคยได้ยินกันมาก่อนแล้ว แต่สำหรับคนที่ไม่เคยได้ยิน ไม่เป็นไร วันนี้เราจะมาดูกันว่า MVC มันคืออะไร และ ทำไมเราถึงต้องใช้ MVC"
date: 2015-11-01T22:24:44.000
author: arnondora
template: full-width
type: post
isFeatured: false
status: published
---

ถ้าพูดถึง MVC หลาย ๆ คนน่าจะเคยได้ยินกันมาก่อนแล้ว แต่สำหรับคนที่ไม่เคยได้ยิน ไม่เป็นไร วันนี้เราจะมาดูกันว่า MVC มันคืออะไร และ ทำไมเราถึงต้องใช้ MVC

## MVC คืออะไร ?
ก่อนอื่นต้องขอท้าวความกลับไปตอนที่เราเรียน OOP ก่อน ตอนนั้นเราก็เรียนกันว่า เออ OOP นะ มันคือการเขียนโปรแกรมโดยแบ่งทุก ๆ อย่างเป็น Object ย่อย ๆ ที่ทำหน้าที่หลักอย่างเดียว แต่สุดท้ายแล้ว Object ทุกตัวที่เราเขียนออกมา มันก็ทำงานออกมาเป็นโปรแกรมเดียว แต่ในสถานการณ์จริง ๆ ถามว่า เราจะแยกอะไร อันไหนบาง ออกมาเป็น Object แยก โน้นนี่นั่น เพราะฉะนั้นแต่ล่ะคนแยก ออกมา อาจจะใช้มาตราฐานในการแยกไม่เหมือนกัน MVC เลยเข้ามาช่วยเรา โดยมันให้มาตราฐานกับเราในการแยกแต่ล่ะส่วนของโปรแกรมเราออกมาเป็น Object นั่นคือ แบ่งเป็น 3 ส่วน คือ Model , View และ Controller

* **Model** คือ ส่วนที่เราเอาไว้ใช้ทำงานกับ ข้อมูลดิบ ๆ มันจะทำงานเมื่อ Controller ต้องการข้อมูล มันก็จะดึงข้อมูลส่งไปให้ Controller ไปจัดการ ถ้านึกภาพเล่น ๆ **ก็เหมือนกับ บรรณารักษ์ ที่คอยเฝ้า, จัดเรียง และสามารถค้นหาหนังสือ ที่เราต้องการได้**
* **Views คือ พริตตี้สาว สวย หมวย ที่คอยเป็นหน้า เป็นตาให้กับโปรแกรมเรา** บางครั้ง เราก็จะเรียกมันว่า User Interface เพราะมันเป็นส่วนที่ใช้ติดต่อกับผู้ใช้นั่นเอง
* **Controller คือ กรรมกรหนุ่มล่ำบึก** ที่คอยเป็น เบ้ และ มันสมอง ให้กับโปรแกรม โดยส่วนนี้จะรับหน้าที่ในการจัดการโปรแกรมเรา เช่นการประมวลผล หรือรับข้อมูลเป็นต้น และเป็นส่วนที่เราจะเก็บพวก Logic ของโปรแกรมเราไว้ในนี้เลย

## Flow การทำงาน คร่าว ๆ
![mvc_model](./mvc_model.png)

ให้เรานึกถึงว่า เวลาเราไปกินอาหาร ในร้านอาหารเลย ก่อนอื่น เราก็ต้องสั่งอาหารกันก่อน ฉะนั้นคนที่มารับ Order เราก็คือ Views ของโปรแกรมเรานั่นเอง หลังจากที่ พนักงานรับ Order เราไปแล้ว ก็จะเอา Order เราไปให้เชฟที่ทำอาหาร ในที่นี้เชฟ เราก็คือ Controller ที่ค่อยสั่งให้ลูกน้องทำอาหาร แต่ก่อนหน้านั้น เชฟก็ต้องรู้ว่า ไอ้ที่คนรับ Order จดมามันคืออะไร ก็ต้องไปเปิด เมนู ดูนิดนึง ในที่นี้เมนู ก็คือ Model นั่นเอง จากนั้นเชฟ ก็จะทำอาหาร ออกมา และให้ View หรือคนเสริฟอาหาร เอาอาการไปเสริฟที่โต๊ะของ User นั่นเอง และก็จบ ทำนองนี้แหละ
อาจจะ งง ว่าเล่าอะไรมา เอาคร่าว ๆ คือ เราเป็น User ใช้โปรแกรม ทีนี้เวลาเราใช้โปรแกรม หน้าตาของโปรแกรมเรามันก็คือ View จากนั้นมันก็จะไปเรียก Controller เพื่อให้ Controller ตัดสินใจว่าจะทำอะไรต่อ อาจจะต้องไปเรียกฐานข้อมูล หรือแหล่งข้อมูลต่าง ๆ (Model) และส่งกลับไปให้ View อีกครั้งนึง

## หลักการที่โคตรสำคัญ
มีเรื่องนึง ผมเจอบ่อยมาก สำหรับมือใหม่ ๆ นั่นคือ "แกชอบข้าม Hierarchy!!" หลักการสำคัญใน MVC เลยคือ **Model จะไม่สามารถ เรียก Method ของ View หรือ Controller ได้โดยตรง** เพราะว่า  Model จะไม่มีตัวแปรที่เก็บ Object ของ View และ Controller ไว้ แต่ สามารถคุยกันได้โดยใช้ Object พวก Observer ที่ Implements มาจาก Observer Interface และตัว Model จะแจ้งข้อมูลโดยการส่ง Event Notification กลับไปหา Observer ตัวอื่น ๆ ถ้า Observer นั้นเป็น View มันก็จะรับข้อมูลมา Update ข้อมูลในตัวเองใหม่ **กลับกัน View เองก็ไม่เห็น Controller เหมือนกัน** ทำได้แค่ส่ง Event Notification ไปหา Observer ที่เป็นของ Controller ตัวนั้น ๆ เท่านั้นเอง ที่เราต้องทำแบบนี้ เพราะว่า MVC นั้น แยก ส่วน ของ Model และ View ออกจากกัน

## ทำไม ต้องเปลี่ยนมาใช้ MVC
หลาย ๆ คนที่ไม่ได้ออกแบบโปรแกรมได้ดีสักเท่าไหร่ พอเขียน ๆ ไปเรื่อย ๆ โปรแกรมของเราก็ใหญ่ขึ้นเรื่อย ๆ ผลก็คือ ไฟล์อะไรมั่วไปหมด จัดลำดับโค๊ตก็ไม่เรียบร้อย โค๊ตก็ยาว อ่านก็ยาก ยิ่งถ้าทำงานพร้อมกันหลาย ๆ คนแก้โปรแกรมกันที รับรอง ธนูปักหัวเข่า และได้ลงไปดิ้น กองกับพื้น ก่อนจะแก้โปรแกรมแน่นอน ฉะนั้นการที่เราออกแบบโปรแกรมของเราให้เป็น MVC ก็ทำให้เราทำงาน ทั้งคนเดียว และกับคนอื่น ได้ง่ายขึ้นเยอะเลย จะได้ไม่ต้องโดนธนูปักหัวเข่าและนอนกลิ้งไปกับพื้นก่อนที่จะแก้โปรแกรม
