---
title: "Getting Started with Bootstrap in 30 mins"
image: "./bootstrap_getting_started_session_4.png"
category: Tutorial
excerpt: "วันนี้ก็ได้มีโอกาสได้เป็นเป็น Guest Speaker ในวิชาเรียนตัวเอง ก็รู็สึกแปลกดี ปกติไปพูดข้างนอกส่วนใหญ่"
date: 2015-11-30T21:11:59.000
author: arnondora
template: full-width
type: post
isFeatured: false
status: published
---

วันนี้ก็ได้มีโอกาสได้เป็นเป็น Guest Speaker ในวิชาเรียนตัวเอง ก็รู็สึกแปลกดี ปกติไปพูดข้างนอกส่วนใหญ่ คนฟังก็จะไม่ใช่คนที่เรารู้จักเยอะสักเท่าไหร่ รอบนี้ อ้าวเพื่อนหมดเลย แอบประหม่านิด ๆ และก็พูดไม่จบด้วย เวลาหมดซะก่อน ในโพสต์นี้เลยจะมาเล่าใหม่เลย เอาแต่ต้นจนจบเลย (คนที่ไม่ได้อยู่ในเหตุการณ์ก็อ่านได้นะ อย่าหนีไปไหน !!)

![bootstrap_getting_started_session_5](./bootstrap_getting_started_session_5.jpg)

หัวข้อที่ไปพูดก็คือ Getting Started with Bootstrap in 30 mins ก็ง่าย ๆ เป็นการ Intro นิด ๆ หน่อย ๆ พอหอมปากหอมคอ เพราะคนที่ฟังส่วนใหญ่ก็น่าจะยังไม่เคยลองใช้ เริ่มกันเลยดีกว่า
Bootstrap ก็เป็น CSS Framework ตัวนึงที่ช่วยให้เราสามารถสร้างหน้าเว็บต่าง ๆ ได้ง่ายขึ้น สามารถโฟกัสกับการออกแบบหน้าเว็บได้มากขึ้น และสามารถทำในสิ่งที่เรียกว่า Responsive Webpage (ง่าย ๆ เลยคือหน้าเว็บที่สามารถย่อขยายตัวเองให้เข้ากับหน้าจอที่เปลี่ยนไปได้) ได้ง่ายอีกด้วย
แต่จริง ๆ แล้ว CSS Framework ทั้งโลกก็ไม่ได้มีแค่ Bootstrap อย่างเดียว มีอีกหลาย ๆ ค่ายเลยที่ทำออกมาให้เราใช้กัน นอกจากที่ดัง ๆ อย่าง Bootstrap แล้วก็ยังมีพวก Foundation ที่ดังไม่แพ้กัน หรือจะเป็น Jaidee ที่เป็นของคนไทยอีกด้วย
ถ้าเราโหลดมา ในตัว Bootstrap มันจะมีของอยู่ข้างในอยู่ 3 อย่างด้วยกัน

* Responsive Grid - เจ้านี่แหละ ที่เป็นพระเอกขี่ม้าข้าวให้เรา ทำให้เราสามารถสร้าง Responsive Webpage ได้ง่ายขึ้นผ่านระบบ Grid ของตัว Bootstrap
* Components - เป็นเหมือนกล่องของเล่นของเรา ที่มี Object ต่าง ๆ ให้เราเลือกใช้ ถ้า งง กันก็ให้นึกถึง HTML Tag ธรรมดานี่แหละ ! แต่เอาไปใส่ Style ให้มันหน้าตาดีขึ้น รวมร่างกับระบบ Grid ได้ดีขึ้น
* Javascript Libraries - และอันสุดท้ายก็ตามชื่อเลย เป็น Pre-Programmed Javascript ที่รวม Function ที่เราอาจจะเรียกใช้อยู่บ่อย ๆ มาให้เรา **แต่จำเป็นต้องใช้ jQuery ด้วยนะ**

## Grid System
เรื่องของ Grid ใน Bootstrap ให้เรามองว่า เราซอยหน้าเว็บของเราเป็นช่อง ๆ ที่มี Row และ Column ซึ่งมันมีกฏอยู่ว่า

    1 Row = 12 Column

ถ้าเกินกว่านั้นมันจะเอาอันที่เกินกระโดดลงมาที่ Row ถัดไปให้ทันที เราสามารถวางมันยังไงก็ได้ เราอาจจะใช้ 12 ช่องใน 1 แถว ไปเลยก็ได้ หรือจะแบ่งเป็น 6 กับ 6 ก็ได้ ขึ้นอยู่กับเราเลย

![bootstrap_getting_started_session_1](./bootstrap_getting_started_session_1.png)

โดยถ้าเราต้องการที่จะสร้าง Column ขึ้นมา เราสามารถสร้าง <div\> ธรรมดา แล้วให้เรียก Class .col-md-จำนวนช่อง ได้เลย เช่นผมต้องการสร้าง Column ที่มีขนาด 5 ช่องก็จะเป็น

    <div class = "col-md-5"></div>

![bootstrap_getting_started_session_2](./bootstrap_getting_started_session_2.png)

จากกฏที่ว่ามา ทำให้เราสามารถสร้างหน้าเว็บที่เป็น Responsive ได้อย่างง่ายดายเลย จากตัวอย่างข้างบน ทางด้านซ้ายจะเป็นหน้าจอ Desktop แบบที่เราใช้ทั่วไป และทางด้านขวาเป็นไฟล์เดียวกัน แต่เป็นหน้าจอโทรศัพท์ที่มีขนาดเล็กกว่าแทน จะสังเกตว่าตัว .col-md-3 มันจะย้ายตัวเองลงมาเมื่อมันอยู่ในโทรศัพท์ นี่คือข้อดีของระบบ Grid ที่ช่วยจัดการให้เราอัตโนมัติ
จะเห็นได้ว่า มันง่ายมาก ๆ แต่มันก็ยังไม่จบอีก นอกจากที่เราจะสามารถเลือกจำนวนช่องได้แล้ว เรายังสามารถเลือกได้อีกกว่า ให้มันขยับตัวเองไปด้านล่างที่ขนาดหน้าจอแบบไหน จากตัวอย่างที่ผมใช้เมื่อครู่จะเป็น md หรือ Medium นอกจาก md ที่ทำให้ดูไปเมื่อครู่ ก็ยังมี xs ที่เป็นน้องเล็กสุด, sm พี่ใหญ่ขึ้นมาหน่อย, md พี่คนกลาง และ lg พี่คนโต
โดยเราสามารถเลือกขนาดทั้ง 4 ได้โดยการเปลี่ยนชื่อ Class จาก md ให้เป็นขนาดที่เราต้องการได้เลย ง่ายมาก ๆ และอีกเรื่องสุดท้าย (ของ Grid) นั่นคือ Grid Offset เราสามารถเลื่อน Grid ของเราได้ โดยให้เราเรียก Class ที่ชื่อว่า .col-md-offset-ขนาดที่ต้องการเลื่อน(เป็นช่อง Grid) (ถ้านึกไม่ออกให้นึกซะว่า เราสร้าง Grid เปล่ามาวางก็ได้) เช่น ต้องการสร้าง Grid ที่มีขนาด 3 ช่องโดยให้มันเลื่อนออกจาก Grid อันแรกไป 2 ช่อง ก็จะเป็น

    <div class = "col-md-3 col-md-offset-3"></div>

## Components
เมื่อหัวข้อที่แล้ว เราก็ได้พูดกันถึงเรื่องของ Grid ที่เหมือนพื้นบ้านก็ไปแล้ว ในหัวข้อนี้เราก็จะมาพูดถึง Components ที่เป็น Furniture ในบ้านกันบ้าง ตัว Components ใน Bootstrap ส่วนใหญ่แล้วก็จะเป็น Object ต่าง ๆ ที่เราสามารถเรียกได้ผ่าน Tag HTML ทั่ว ๆ ไปเลย เช่น ปุ่ม หรือพวกแปลก ๆ ที่ HTML Tag ตัวเดียวเรียกไม่ได้คือพวก Navbar นั่นเอง ซึ่งมันมีเยอะมาก ก็จะขอไม่เข้าไปดูแต่ล่ะ Components เพราะว่ามันจะยาวมาก ๆ เดี๋ยวจะไม่จบสักก่อน ถ้าอยากดูรายละเอียดเพิ่มเติมให้เข้าไปดูใน [Documentation][3] ของ Bootstrap ได้เลย

## Javascript Libraries
ตัว Javascript ที่ Bootstrap มีมาให้มันก็ไม่ใช่ขนาดแบบที่ jQuery มีมาให้อะไรขนาดนั้น แต่เป็น Javascript ที่เกี่ยวข้องกับการสร้างหน้าต่าง ๆ โดยผ่าน Bootstrap เช่นพวก Dropdown, Tab หรือพวก Transition อะไรพวกนี้ อันนี้ก็อยากจะขอข้ามไปเลยล่ะกัน เพราะว่า มันยาวพอ ๆ กับ Components เลย ถ้ารอได้ในอนาคตอันใกล้มาก ๆ เว็บเราจะมี Tutorial เรื่องนี้ออกมาให้ รอหน่อยนะครับ

## Demo
ในการ Demo ใน Session ที่ได้พูดไปเป็นการสาธิตการทำหน้าเว็บ Blog ง่าย ๆ โดยการใช้ Bootstrap ซึ่งในบทความนี้อาจจะไม่ได้ Step by Step เหมือนใน Session ขนาดนั้น แต่พยายามจะเขียนให้เข้าใจกัน
แต่ก่อนอื่น เราจะมาทำการติดตั้งตัว Bootstrap กันก่อน เราสามารถทำได้หลายวิธีมาก ๆ ตามความถนัดของเรา ซึ่งผมเสนออยู่ 2 วิธี

* ติดตั้งผ่าน Package Manager ต่าง ๆ เช่น [Bower][4]
* Download ผ่านเว็บของ [Bootstrap][5] (หลังจากที่เราโหลดมา ให้เราทำการแตกไฟล์ลงใน Directory ที่เราต้องการทำงานได้เลย)
หลังจากที่เราได้ Bootstrap กันมาแล้ว เราก็จะต้อง Link ตัว CSS และ JS ลงไปในหน้าเว็บของเราด้วย โดยไฟล์ที่จะต้องเอาเข้ามาจะมีอยู่ 3 ไฟล์หลัก ๆ นั่นคือ

* bootstrap.min.css - จะเป็นไฟล์ CSS หลักของ Bootstrap เพื่อควบคุม Style ต่าง ๆ รวมถึง Grid อีกด้วย
* jquery.min.js - เป็น jQuery นั่นเอง
* bootstrap.min.js - เป็นไฟล์ js ของ Bootstrap ที่ทำให้เราสามารถเรียกใช้ Javascript ของตัว Bootstrap ได้ **(ก่อนที่จะ Link ไฟล์นี้เข้ามาจะต้อง Link jQuery เข้ามาก่อนเสมอ ไม่งั้นตัว Script ของ Bootstrap จะทำงานไม่ได้)**

![bootstrap_getting_started_session_3](./bootstrap_getting_started_session_3.png)

หลังจากที่เราได้ติดตั้ง Bootstrap กันไปแล้ว เรามาออกแบบกันดีกว่า ถ้าเราดูจากภาพด้านบน เราจะเห็นว่า เราสามารถแบ่งมันได้เป็น 3 ส่วน นั่นคือ Header, Content และ Footer
ในส่วนของ Header ก็ไม่มีอะไรมากก็เป็นแค่ row ธรรมดา ก็ผ่านไป
ส่วนของ Content เราจะต้องแบ่ง Grid ของเราออกเป็น 2 ช่องนั่นคือส่วนของ บทความ และ ผู้เขียน โดยผมจะแบ่งง่าย ๆ ออกเป็น 9 กับ 3 ช่องก่อนเพื่อความง่าย
และสุดท้าย จะเป็น footer ที่เป็นเหมือนกับ Header ที่เป็นแค่ row ธรรมดา
จากข้อมูลที่เราได้อ่านไปเมื่อสักครู่ก็ทำให้เราสามารถวางโครงสร้างของหน้าคร่าว ๆ ได้แล้วโดยตาม Code นี้เลย

    <div class = "row">
     <!-- Header Goes Here! -->
    </div>

    <div class = "row">
       <div class = "col-md-9">
          <!-- Content Goes Here! -->
       </div>

       <div class = "col-md-3">
         <!-- Author Goes Here! -->
       </div>

    </div>

    <div class = "row">
       <!-- Footer goes Here! -->
    </div>

แต่ช้าแต่ ถ้าเราลองดูในหน้าตัวอย่างเมื่อครู่ ในส่วนของ Content มันจะมีการเยื้องขวาออกมาหน่อย ทำให้เราต้องเพิ่ม Offset ให้กับช่องของ Content จากเดิมช่องของ Content เรามีอยู่ 9 ดังนั้นผมจะขอแบ่งเป็น 2 เป็น Offset และ 7 เป็นส่วนของ Content ไป ทำให้ Code ในส่วนของ Content จะเปลี่ยนไปเป็น

    <div class = "col-md-offset-2 col-md-7">
    </div>

อีกส่วนที่ดูจะมีปัญหาหน่อย ๆ นั่นคือ ส่วนของ Author ที่เราต้องทำให้มันอยู่ตรงกลางของช่องให้ได้ ซึ่งวิธีที่ผมใช้ จากหลักการง่าย ๆ เลยนั่นคือ 1 Row = 12 Column เพราะฉะนั้นใน 3 Columns เราสามารถซอยย่อยออกเป็น 12 ช่องใน 3 ช่องได้ ดังนั้นผมก็จะสร้างเป็น Grid ซ้อน Grid อีกชั้นนึง แต่ในชั้นใน เราจะดันโดยการใช้ Offset ออกไป 2 ช่อง และให้ ส่วนของ Content ใน Author มีแค่ 7 ช่อง ดังนั้นส่วนของ Author เราจะต้องเพิ่ม Grid ลงไปเพิ่มอีกชั้นหนึ่ง ตามนี้เลย

    </div class = "col-md-3">
         <div class = "col-md-offset-2 col-md-7">
         </div>
    </div>

ส่วนตัวงานข้างในที่เหลือและ Assets ที่ใช้อื่น ๆ จะโพสต์ให้อยู่ใน [Github][7] (สามารถ Clone มาดูและศึกษาได้) เพราะมันไม่น่าจะมีอะไรแล้ว ที่เหลือใน Code จะเป็นแค่การจัดวางตัวอักษร รูปภาพ และ Content อื่น ๆ ในหน้าเว็บ (แต่จะมีการใช้ CSS ที่เขียนเองแยกด้วยเพื่อความสวยงามมากขึ้น)
และถ้าใครอยากได้ Side ผมอัพอยู่ใน Google Drive อยู่แล้วเข้าไปตาม [ลิงค์][8] นี้ได้เลย

## สรุป
Bootstrap เป็น CSS Framework ตัวหนึ่งที่ทำให้เราทำงาน สร้างหน้าเว็บได้สายงาม และง่ายมากขึ้น ทำให้เราสามารถที่จะ Focus กับการออกแบบหน้าได้มากขึ้น ไม่ต้องมาคิดเรื่องว่าจะเขียนยังไง ได้มากเลยทีเดียว ถ้าเราคล่องแล้ว เราก็สามารถที่จะไปสร้างหน้าเว็บต่าง ๆ ได้เยอะมากเลย เพราะอย่างตัว Theme ของ Blog นี้ก็ถูกสร้างมาจาก Bootstrap เพียว ๆ เลยเหมือนกัน และสุดท้าย ก็ต้องขอขอบคุณอาจารย์มาก ๆ ที่ให้โอกาสมาพูดในวันนี้ ถึงแม้ว่าอาจจะ Demo เลยเวลาไปบ้าง ก็ถือโอกาสขอโทษใน ณ ที่นี้เลย และสำหรับคนที่ฟังในวันนี้ อาจจะรู้เรื่องบ้าง ไม่รู้เรื่องบ้าง นั่งคุยกันบ้าง ผมก็หวังลึก ๆ ว่า น่าจะได้อะไรบ้าง สำหรับสิ่งที่พูดในวันนี้


[3]: http://getbootstrap.com/components/
[4]: http://www.arnondora.in.th/getting-started-with-bower/
[5]: http://getbootstrap.com
[7]: https://github.com/arnondora/Bootstrap-Getting-Started
[8]: https://docs.google.com/presentation/d/1TMisdFTkwWspAR52htFX9IbETC5AaOd-4zcSYqMiQ4U/edit?usp=sharing
