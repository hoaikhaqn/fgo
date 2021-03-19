import React from 'react';
import { Link } from 'react-router-dom';
import HeadImage from '../../assets/images/story_head.png';
import ButtonClose from '../../assets/images/btn_close.png';

export default function Story() {
    return (
        <div id="Story" className="story">
            <div className="container story__wrapper">
                <Link to="/" className="btn btn_close"><img src={ButtonClose} alt="" /></Link>
                <div className="story__head">
                    <img src={HeadImage} alt="" />
                    <div className="btn btn_scrol_down">
                        <span>Scroll Down</span>
                    </div>
                </div>
                <div className="story__content">
                    <section className="story_section story_section--1">
                        <div className="section__heading">
                            <h2 className="heading__roman_number">I</h2>
                            <h4 className="section__name">PROLOGUE</h4>
                        </div>
                        <div className="section__content">
                            <div className="row">
                                <div className="col-6">
                                    <p><span className="highlight">Cuộc Chiến Chén Thánh</span> là cuộc chiến được sáng lập bởi "Ngự Tam Khởi Thủy" - "Tam Đại Gia Tộc" pháp sư lớn, có nguồn gốc lâu đời là: <span className="highlight">Einzbern</span>, <span className="highlight">Matou</span> và <span className="highlight">Tōsaka</span> từ một thế kỷ trước như một phương kế "Chạm đến Căn Nguyên".</p>
                                    <p>Trong đó, <span className="highlight">7 pháp sư (Master)</span>   được chọn sẽ triệu hồi <span className="highlight">7 Anh linh (Servant)</span>  cùng cạnh tranh, tham gia vào một Trận Tử Chiến Tàn Khốc để giành được sức mạnh của <span className="highlight">Chén Thánh (Holy Grail)</span> , một Thánh Tích huyền thoại - một Thánh Vật quyền năng có khả năng ban tặng một điều ước cho mỗi thành viên của bộ đôi thắng cuộc. Sau ba cuộc chiến bỏ lửng bởi Chén Thánh khó nắm bắt, cuộc chiến lần IV <span className="highlight">bắt đầu</span>.</p>                                </div>
                                <div className="col-6">

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
