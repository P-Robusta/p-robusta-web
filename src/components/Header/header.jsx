import Item from './item';
export const Header = (props) => {
  return (
    <header id="header">
      <div id="headerCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#headerCarousel"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#headerCarousel" data-slide-to={1} />
          <li data-target="#headerCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <Item
              data={{
                image:
                  'https://i.ibb.co/xSN48DZ/PNV-students-training-2015-93-1.jpg',
                paragraph:
                  'Chúng tôi hỗ trợ các thanh niên có hoàn cảnh khó khăn xây dựng các kỹ năng làm việc thông qua giáo dục và đào tạo trong ngành công nghiệp kỹ thuật số.',
              }}
            />
          </div>

          <div className="item">
            <Item
              data={{
                image:
                  'https://i.ibb.co/H7vzg0x/PNP-Graduation-ceremony-2015-189.jpg',
                paragraph:
                  'Mục tiêu của chúng tôi chính là 90% sinh viên ra trường có việc làm, để các em và gia đình có thể thoát nghèo đồng thời góp phần vào sự phát triển chung của kinh tế và xã hội đất nước mình.',
              }}
            />
          </div>
          <div className="item">
            <Item
              data={{
                image: 'https://i.ibb.co/9VMvGMz/DSC-1323-1200.jpg',
                paragraph:
                  'Tôi tự hào mình đã tốt nghiệp ngành Quản trị mạng tại PN Campuchia. Chanthy Loem, Cựu sinh viên khóa 2012 và nhân viên IT tại PNC.',
              }}
            />
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#headerCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#headerCarousel"
          role="button"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
    </header>
  );
};
