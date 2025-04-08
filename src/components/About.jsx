import React from 'react';  
import { Link } from 'react-router-dom';

const About = () => {  
    return (  
        <div className="p-8 text-white">  
            <h1 className="text-4xl font-bold text-center mb-4">Về Chúng Tôi</h1>  
            <p className="text-lg mb-6">  
                Chào mừng bạn đến với trang web xem phim của chúng tôi! Nơi cung cấp cho bạn những bộ phim mới nhất và hấp dẫn nhất.  
            </p>  
            <h2 className="text-2xl font-semibold mb-2">Tại Sao Chọn Chúng Tôi?</h2>  
            <ul className="list-disc list-inside mb-6">  
                <li className="mb-2">🌟 Bộ sưu tập phong phú: Hàng ngàn bộ phim từ các thể loại khác nhau.</li>  
                <li className="mb-2">🥇 Chất lượng hình ảnh cao: Trải nghiệm xem phim tuyệt vời với chất lượng HD.</li>  
                <li className="mb-2">📅 Cập nhật thường xuyên: Luôn có những bộ phim mới ra mắt để bạn thưởng thức.</li>  
            </ul>  
            <h2 className="text-3xl font-semibold mb-4">Lịch Sử Của Chúng Tôi</h2>  
            <p className="text-lg mb-4">  
                Chúng tôi bắt đầu hành trình này vào năm 2022 với một sứ mệnh đơn giản: giúp mọi người dễ dàng tiếp cận với những bộ phim chất lượng. Qua thời gian, chúng tôi đã mở rộng danh sách phim và cải thiện trải nghiệm người dùng bằng các tính năng tiện ích.  
            </p>  
            
            <h2 className="text-3xl font-semibold mb-4">Cam Kết Chất Lượng</h2>  
            <p className="text-lg mb-4">  
                Chúng tôi cam kết mang lại chất lượng tốt nhất cho người dùng với các phim được lựa chọn cẩn thận. Mọi bộ phim trên trang đều được kiểm tra và cập nhật thường xuyên để bảo đảm tính chính xác và chất lượng.  
            </p>  
            
            <h2 className="text-3xl font-semibold mb-4">Thông Tin Liên Hệ</h2>  
            <p className="text-lg mb-4">  
                Nếu bạn có bất kỳ câu hỏi nào hoặc phản hồi, vui lòng liên hệ với chúng tôi qua địa chỉ email: <a href="mailto:support@filmwebsite.com" className="text-white hover:underline">support@filmwebsite.com</a>.  
            </p>  
            
            <h2 className="text-3xl font-semibold mb-4">Tham Gia Cùng Chúng Tôi</h2>  
            <p className="text-lg mb-4">  
                Theo dõi chúng tôi trên các mạng xã hội và cập nhật những bộ phim mới nhất, tin tức và sự kiện hấp dẫn!  
            </p>  

            <div className="flex justify-center gap-12 mt-6">  
                <Link to="/" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-200">  
                    Khám Phá Ngay  
                </Link>  
                <Link to="/contact" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">  
                    Liên Hệ Với Chúng Tôi
                </Link>  
            </div>  
        </div>  
    );  
};  

export default About;  