import React from 'react';  

const Footer = () => {  
    return (  
        <footer className="bg-gray-800 text-white py-6">  
            <div className="container mx-auto px-4">  
                <div className="flex flex-col md:flex-row justify-between items-center">  
                    <div className="mb-4 md:mb-0">  
                        <h2 className="text-lg font-bold">Gold Film</h2>  
                        <p className="text-sm">  
                            Gold Film - Nơi cung cấp những bộ phim chất lượng nhất  
                            với đa dạng thể loại. Hãy cùng thưởng thức những giờ phút thời gian  
                            thư giãn tuyệt vời!  
                        </p> 
                        <p className="text-sm">© 2025 Tất cả bản quyền thuộc về Gold Film.</p>  
                    </div>  
                    <div>  
                        <ul className="flex space-x-6">  
                            <li>  
                                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>  
                            </li>  
                            <li>  
                                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>  
                            </li>  
                            <li>  
                                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>  
                            </li>  
                        </ul>  
                    </div>  
                </div>  
            </div>  
        </footer>  
    );  
};  

export default Footer;  