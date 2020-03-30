import React, { Component } from 'react';

export default class App extends Component {
  state = {
    content: [
      'มอบตัวตัวเองปาสเตอร์ล็อต โปรโมทเดี้ยงโบว์ โปสเตอร์เพียวโหงวเฮ้ง เคลียร์ง่าวสปาย ซ้อไบเบิลต้าอ่วยดีลเลอร์เฟอร์รี่ ดั๊มพ์แฟร์กาญจนาภิเษก คลิป คอรัปชันวิลเลจฮ็อตด็อก บูมอิ่มแปร้ ฟอยล์ โหงวเฮ้งดีพาร์ทเมนท์ตนเองผลักดันตัวตน ช็อคโปรเจ็คท์ มาม่าธัมโมอัลบัมโอเลี้ยง วิดีโอซิ่งมวลชนแคมปัส โบ้ยเทวาธิราชบอร์ด ธุรกรรมกระดี๊กระด๊าเนิร์สเซอรี',
      'แชมปิยองสตรอว์เบอร์รี โรแมนติกไวกิ้งปูอัด ช็อปหลวงพี่ลีกแฟล็ต มาราธอน รากหญ้าแมนชั่นชัวร์ ม้าหินอ่อนเมาท์ซิ่ง เอ็กซ์โป แบล็ก พรีเซ็นเตอร์เป่ายิงฉุบ แบล็คเพียบแปร้ ออโต้โนติสแพนงเชิญ แดนเซอร์เวิร์คฟิวเจอร์ซิตี ห่วย บาร์บี้ซิลเวอร์ แหม็บคาเฟ่หงวน แจ๊กเก็ต',
      'ซิ่งวิดีโอนอมินีแคนู อ่อนด้อยกู๋ฟรังก์ ราสเบอร์รีรีสอร์ตว่ะ สังโฆดีลเลอร์แฟนตาซีไชน่า เยนเครปรีเสิร์ช เก๋ากี้ไวอะกร้าคันธาระ โฮมซูชิเทป โบรชัวร์สเปกสติกเกอร์ตังค์ ศึกษาศาสตร์ฮัลโลวีนเชฟ ล็อต ไคลแมกซ์เทปเวอร์ทาวน์ ไทยแลนด์แบรนด์แพนงเชิญไฮบริดร็อค ราสเบอร์รี โคโยตี้ไดเอ็ตอีสเตอร์เคลื่อนย้ายธรรมา แบรนด์สไตรค์คาร์โก้ ลิมิตไลท์'
    ],
    showContent: ''
  };

  componentDidMount() {
    this.setState({ showContent: this.state.content[0] });
  }

  render() {
    const { showContent } = this.state;
    return (
      <div className="ui container">
        <h1>Simple Tab Components</h1>
        <div class="ui buttons">
          <button
            className="ui button"
            onClick={() =>
              this.setState({ showContent: this.state.content[0] })
            }
          >
            Tab1
          </button>
          <button
            className="ui button"
            onClick={() =>
              this.setState({ showContent: this.state.content[1] })
            }
          >
            Tab2
          </button>
          <button
            className="ui button"
            onClick={() =>
              this.setState({ showContent: this.state.content[2] })
            }
          >
            Tab3
          </button>
        </div>
        <div>
          <h2>{showContent}</h2>
        </div>
      </div>
    );
  }
}
