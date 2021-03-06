---
title: "[Life Hack] P2P กับ Bittorrent โลกแห่งการแบ่งปัน (ที่มากเกินไป)"
image:
category: Review
excerpt: "ในปัจจุบัน P2P ก็หลายเป็น The King ของโลก Internet ของเราซะแล้ว เรียกได้ว่าบรรดาสิงห์นักโหลดทั้งหน้าเก่า และหน้าใหม่ก็ยังต่างติดใจใช้ P2P"
date: 2015-08-31T23:08:41.000
author: arnondora
template: full-width
type: post
isFeatured: false
status: published
---

ในปัจจุบัน P2P ก็หลายเป็น The King ของโลก Internet ของเราซะแล้ว เรียกได้ว่าบรรดาสิงห์นักโหลดทั้งหน้าเก่า และหน้าใหม่ก็ยังต่างติดใจใช้ P2P กันอย่างเหนี่ยวแน่น จากผลสำรวจจากบรรดา ISP ทั้งหลายพบว่า Traffic มากกว่าครึ่งที่ผ่าน ISP นั้นมาจาก P2P ซึ่งเยอะกว่า www ซะอีก แม้ว่าจำนวนคนที่ใช้ P2P จะน้อยกว่า World Wide Web ซะอีก แต่ว่าแต่ P2P คืออะไรกันแน่หว่า แล้วเราใช้มันกันตอนไหน?

## P2P คืออะไร ?
P2P มันย่อมาจาก Peer to Peer เอาง่ายๆ มันคือการเชื่อมต่อแบบที่ว่า เครื่องต่อเครื่องเลย แต่ล่ะเครื่องสามารถส่งผ่านข้อมูลให้กันได้อย่างอิสระเลย ต่างจากแบบ Client/Server (ที่นิยมใช้ในปัจจุบัน) ที่ต้องอาศัย Server เป็นตัวกระจายข้อมูลให้กับ Client ถ้าเกิดวันใดวันนึง Server เกิดล่มขึ้นมา Client ก็จะไม่สามารถเข้าถึงข้อมูลที่อยู่บน Server ได้เลย
ย้อนกลับมาที่แบบ P2P ถ้ามันเกิดเหตุการณ์ที่ว่า มีเครื่องใดเครื่องหนึ่งในวงเกิดล่ม หรือดับอะไรก็ตาม เครื่องที่เหลือก็ยังสามารถเข้าถึงข้อมูลได้อยู่ผ่านเครื่องที่เหลือได้เลย ทางภาษา Network เราจะเรียกว่า Decentralised Network หรือ Network ที่ไม่มีศูนย์กลางนั่นเอง

## ข้อเสียของ P2P น่ะมันมีมั้ย?
แน่นอนว่าอะไรมันมีข้อดี มันก็ต้องมีข้อเสียเหมือนกัน ข้อเสียของ P2P คือเราไม่สามารถควบคุมความเป็นส่วนตัวของข้อมูลที่เราปล่อยลงไปได้ เพราะว่า ถึงเราลบที่เราไป คนอื่นที่เคยโหลดก็จะมีข้อมูลที่เราเคยปล่อยเก็บไว้ คนอื่นนั้นก็ยังสามารถปล่อยให้คนอื่นโหลดต่อได้อยู่ดี ต่างจาก Client/Server ที่เราลบข้อมูลใน Server เรา ก็เป็นอันจบแล้ว

## เราใช้ P2P กันมากแค่ไหน?
ในปัจจุบัน P2P นั่นได้รับความนิยมกับคนเฉพาะกลุ่มจริงๆ เช่น เรา Skype ไปหาเพื่อน หรือว่าจะเป็นสิงห์นักโหลด Bittorrent ทั้งหลาย โดยอย่างที่ได้บอกได้ตอนต้นว่า จากผลการสำรวจพบว่า จำนวน Traffic ส่วนใหญ่ที่วิ่งผ่าน ISP นั้นมาจาก P2P client ทั้งนั้นเลย แต่สิ่งที่ทำให้ Traffic มันไปกองอยู่กับ P2P เยอะก็น่าจะเป็นพวก สิงห์นักบิตทั้งหลายเลยล่ะ โหลดทีนี้โคตรเยอะ

## Bittorrent คืออะไร ?
มันคือ Protocol แบบนึงที่ทำหน้าที่เชื่อมต่อเครื่องคอมพิวเตอร์เข้าด้วยกัน เพื่อการแชร์ไฟล์ เหมือนๆ กับ P2P นี่ล่ะ แต่เจ้า Bittorrent มีดีกว่านั้นตรงที่มันสามารถแชร์กันเป็นใยแมงมุม แต่มันจะโหดกว่าตรงที่ มันไม่ได้จบกันที่คอมพิวเตอร์แค่ 2 เครื่อง แต่มันสามารถขยายไปได้เรื่อยๆ เลย เวลาเราโหลดไฟล์ๆ นึงผ่านทาง Bittorrent เราก็จะโหลดมาเป็นชิ้นส่วน ในขณะเดียวกัน เราก็จะ Upload ชิ้นส่วนที่เราโหลดเสร็จแล้วให้คนอื่นในเวลาเดียวกัน แต่ล่ะคนก็ทำแบบนี้กันทุกคนไปเรื่อยๆ ทำให้คนอื่นๆ สามารถเข้ามาโหลดได้เรื่อยๆ เลย ยิ่งคนปล่อยเยอะ เราก็ยิ่งโหลดได้เร็วขึ้นเท่านั้น ผมจะไม่พูดถึงเรื่องนี้มากล่ะกัน ถ้าอยากรู้ ก็คอมเม้นเข้ามา เดี๋ยวจัดให้ในตอนต่อๆ ไป เพราะว่ามันยาวมาก

## เมื่อ Bittorrent เริ่มแพร่หลาย
ตอนแรกๆ ในสังคม Bittorrent ก็ไม่ได้มีไฟล์อะไรให้โหลดมากมาย แต่พอเวลาผ่านไปสังคมของสิงห์นักโหลดมันก็ใหญ่ขึ้นเรื่อยๆ และเนื่องจากการแชร์ไฟล์ผ่าน Bittorrent มันไม่ต้องกลัวว่าใครจะเข้ามาควบคุม มันจึงกลายเป็นแหล่งที่ไว้แชร์โปรแกรม หนัง การ์ตูน ที่ส่วนใหญ่ (ใหญ่มากๆ) แล้วมีสิขสิทธิ์กันทั้งนั้น แล้วเวลาผ่านไปสังคมของสิงห์นักโหลดก็ใหญ่ขึ้นเรื่อยๆ ไฟล์ที่ผิดกฏหมายก็ถูกโหลดเยอะขึ้นเรื่อยๆ แพร่หลายมากขึ้นเรื่อยๆ ตามกันไป เกิดกลายเป็นสังคมแห่งการแบ่งปันที่แฝงไปด้วยอาชญากรรม
แต่ถามว่า ทำไมไม่มีใครพยายามหยุดมันเลย เอาจริงๆ ตอนนี้ ISP และหลายๆ คน ก็มีความพยายามอย่างจริงจังในการหยุดเจ้าพวก Bittorrent พวกนี้เหมือนกัน แต่ถามว่า คนจับก็หาทางจับไป พอคนโหลดรู้ตัวก็ไหวตัวทันแบบนี้ไปเรื่อยๆ ก็ไม่มีวันจบสักที ตราบใดที่ผู้คนยังไม่สนใจเรื่องของสิขสิทธิ์เพียงพอเจ้า Bittorrent พวกนี้ก็ไม่หายไปหรอกครับ

## แต่ Bittorrent ก็ไม่ได้ผิดกฏหมายเสมอไป
จากที่ผมเล่ามาทั้งหมด Bittorrent อาจจะดูแย่ หรืออาจจะผิดกฏหมาย แต่ความจริงแล้ว Bittorrent ก็ไม่ได้แจกแต่ไฟล์ที่ละเมิดสิขสิทธิ์อย่างเดียว อาทิเช่น Software บางตัวที่เป็น Open Source ซึ่งมันฟรี เจ้าของ Software อาจจะให้ User นั้นสามารถโหลดผ่าน Bittorrent ก็ได้เหมือนกัน เพราะฉะนั้นการโหลดบิตก็ไม่ได้หมายความว่า มันจะเป็นการละเมิดสิขสิทธิ์อะไรเสมอไป แต่ขอให้เราเลือกโหลดให้ถูก มันก็เหมือนสังคมเรา มีทั้งดี ทั้งชั่วปนกันไป ขอให้เราทำตัวให้เป็น User ที่ดีของสังคม Bittorrent แค่นี้ก็ดีแล้วล่ะ!
