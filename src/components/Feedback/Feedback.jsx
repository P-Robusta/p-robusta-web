
import './Feedback.css';
import FItem from './FeedbackItem';
import { useState, useEffect } from 'react';
import CallAPI from '../../helper/callAPI';



export const Feedback = (props) => {
    const [feedback, setFeedback] = useState({});
    useEffect(() => {
        CallAPI('number_overviews')
            .then((res) => {
                setFeedback(res.data.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div id="students">
            <div className="container">
                <div className="section-title text-center">
                    <h2>What our students and staffs say</h2>
                </div>




                <div>

                    {/* Hero Unit */}
                    <section className="hero-unit">
                        <div className="row">
                            <div className="large-12 columns">

                                <ul className="small-block-grid-2 medium-block-grid-3 flip-cards testimonial">
                                    <li ontouchstart="this.classList.toggle('hover');" >

                                        {/* phan goji API bi loi */}
                                        {props.banners.map((item, index) => {
                                            if (index === 0) {
                                                return (
                                                    <div className="item active">
                                                        <FItem
                                                            data={{
                                                                image: item.image,
                                                                name: item.name,
                                                                infor: item.info,
                                                                qoute: item.qoute
                                                            }}
                                                        />
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div className="item">
                                                        <FItem
                                                            data={{
                                                                image: item.image,
                                                                name: item.name,
                                                                infor: item.info,
                                                                qoute: item.qoute
                                                            }}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })}


                                        {/* phan fix cung duoc roi */}

                                        <div className="large button card-front testimonial-image">
                                            <img src="https://pnvwebsite.herokuapp.com/images/content/Hoai-NGO-THI-MY-Student.jpg" alt="" />
                                            <h5 >HOÀI NGÔ THỊ MỸ</h5>
                                            <p>Sinh viên, khóa 2023, PN Việt Nam</p>

                                        </div>
                                        <div className="panel card-back testimonial-content">
                                            <i className="fa fa-code card-icon" />
                                            <div className="hub-info">
                                                <a href="https://pnv22web-passerellesnumeriques-robusta.netlify.app">Nhiều người đã hỏi em rằng “Tại sao là con gái mà mà lại chọn nghề IT này cho cực, sao không đi theo ngành giáo viên hay du lịch cho khỏe”, rồi “Con gái theo ngành này thì không bao giờ bằng con trai đâu”. Khi ấy em cũng không biết phải trả lời thế nào, chỉ biết rằng mình nhất định phải theo đuổi ước mơ này dù có chuyện gì. Em tin rằng nếu cố gắng thì em sẽ làm được. Và em đã chọn PN là nơi nuôi dưỡng ước mơ ấy.”</a>
                                            </div>

                                        </div>
                                    </li>








                                    <li ontouchstart="this.classList.toggle('hover');">
                                        <div className="large button card-front testimonial-image">
                                            <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/Tran-Thi-Diep-PNV-Selection-Officer-Copy.jpg" alt="" />

                                            <h5 >TRẦN THỊ DIỆP</h5>
                                            <p>Nhân viên tuyến sinh, PN Việt Nam</p>
                                        </div>
                                        <div className="panel card-back">
                                            <i className="fa fa-pencil-square-o card-icon" />
                                            <div className="hub-info">
                                                <a href="https://pnv22web-passerellesnumeriques-robusta.netlify.app">Tôi cảm thấy may mắn khi trở thành một thành viên của Gia đình PNV, nơi tôi có cơ hội làm việc với các đồng nghiệp chuyên nghiệp, đi nhiều hơn và thấy những vùng đất với những con người mới để mở mang đầu óc và trái tim. Là một Cán bộ tuyển sinh, tôi tự hào nhận sứ mệnh giúp đỡ các em học sinh kém may mắn có cơ hội học tập và thay đổi cuộc sống. Tôi rất hi vọng các sinh viên sẽ thực hiện được ước mơ của mình!</a>

                                            </div>

                                        </div>
                                    </li>
                                    <li ontouchstart="this.classList.toggle('hover');">
                                        <div className="large button card-front testimonial-image">
                                            <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/03/Lucas-SINROD-Staff.jpg" alt="" />

                                            <h5 >LUCAS SINROD</h5>
                                            <p>Giáo đốc Đào tạo & IT, PN Việt Nam</p>
                                        </div>
                                        <div className="panel card-back">
                                            <i className="fa fa-paper-plane-o card-icon" />
                                            <div className="hub-info">
                                                <a href="https://pnv22web-passerellesnumeriques-robusta.netlify.app">Người ta luôn nghĩ rằng thế giới CNTT rất lạnh lẽo vì chỉ toàn máy móc và AI. Nhưng thông qua PN, tôi đã khám phá lại khía cạnh nhân văn của công nghệ. Những nụ cười tươi tắn hay hay những gương mặt tò mò của sinh viên đã gợi nhớ cho tôi về lí do mà mình bắt đầu học code. Chính là vì thế giới trong máy tính và những tiến bộ công nghệ tràn đầy sức hấp dẫn ấy! Ở PN Việt Nam, chúng tôi đang đào tạo ra những kỹ sư công nghệ từ những sinh viên lớn lên cùng việc đồng áng – nhiều em thậm chí còn chưa từng chạm vào máy tính trước đây.</a>


                                            </div>
                                        </div>
                                    </li>
                                    <li ontouchstart="this.classList.toggle('hover');">
                                        <div className="large button card-front testimonial-image">
                                            <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/03/Cuong-NGUYEN-HUU-Alumni.jpg" alt="" />

                                            <h5 >CƯỜNG NGUYỄN HỮU</h5>
                                            <p>Cựu sinh viên PNV, khóa 2019, Lập trình viên full stack, mgm technology partners</p>
                                        </div>
                                        <div className="panel card-back">
                                            <i className="fa fa-paper-plane-o card-icon" />
                                            <div className="hub-info">
                                                <a href="https://pnv22web-passerellesnumeriques-robusta.netlify.app">PN Việt Nam đến như một phép màu. Chúng em là khóa đầu tiên của chương trình đào tạo mới kéo dài 3 năm. Chúng em đã có nhiều thời gian hơn để tìm hiểu các công nghệ tiên tiến mà các công ty cần, cũng như cải thiện khả năng tiếng Anh và kĩ năng mềm của mình – những hành trang cần thiết trên con đường sự nghiệp. Chúng em được học cách trở thành một thành viên có giá trị trong nhóm, một nhà lãnh đạo tài tình, hoặc thậm chí là một doanh nhân thành công. </a>


                                            </div>
                                        </div>
                                    </li>
                                    <li ontouchstart="this.classList.toggle('hover');">
                                        <div className="large button card-front testimonial-image">
                                            <img src="https://i.ibb.co/6mbwdxZ/tranEro.jpg" alt="" />

                                            <h5 >TRÂN NGUYỄN PHƯỚC BẢO</h5>
                                            <p>Nhân viên ERO, PN Việt Nam</p>
                                        </div>
                                        <div className="panel card-back">
                                            <i className="fa fa-paper-plane-o card-icon" />
                                            <div className="hub-info">
                                                <a href="https://pnv22web-passerellesnumeriques-robusta.netlify.app">Tôi chưa bao giờ nghĩ rằng công việc văn phòng có thể thú vị như thế này. Tôi yêu không khí tại văn phòng của chúng tôi khi tất cả các đồng nghiệp của tôi đối xử với nhau rất nhiệt tình và thân thiện. Tôi yêu tất cả những bữa trưa đầy ắp tiếng cười và những câu chuyện cười nhẹ nhàng. Tôi thích nó bất cứ khi nào sinh viên của chúng tôi đến văn phòng của chúng tôi với những lời chào, dù là hồi hộp hay háo hức. Tôi yêu mọi sự kiện được tổ chức tại PNV - nơi tôi có thể nhìn thấy nụ cười rạng rỡ của các em và thấy các em tự tin và trưởng thành hơn từng ngày. </a>


                                            </div>
                                        </div>
                                    </li>
                                    <li ontouchstart="this.classList.toggle('hover');">
                                        <div className="large button card-front">
                                            <p>Church</p>
                                            <i className="fa fa-users card-icon" />
                                        </div>
                                        <div className="panel card-back">
                                            <i className="fa fa-users card-icon" />
                                            <div className="hub-info">
                                                <a href="http://www.aicfchurch.org">AICFChurch.org</a>
                                                <p>Listen to sermon podcasts or download church graphic design resources.</p>
                                            </div>
                                            <small className="clear">Updated the 4th Sunday.</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="large-12 columns">
                                <div className="small-12 small-centered medium-6 medium-centered large-3 large-centered columns clients">
                                    <p >
                                        <h6 className="text-center">Clients Click Here</h6>
                                        <p className="text-center">
                                            <span className="fa-stack">
                                                <i className="fa fa-circle fa-stack-2x" />
                                                <i className="fa fa-angle-right fa-inverse fa-stack-1x" />
                                            </span>
                                        </p>
                                    </p>
                                </div>
                                {/* end .clients */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
