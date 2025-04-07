import React from "react";
import IconRating from "../assets/rating.png";
import IconHalfRating from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
	return (
		<div className="w-full h-[600px] bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center relative">
			<div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"></div>
			<div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-10">
				<div className="w-[50%] flex flex-col space-y-5 items-baseline">
					{/* Baseline: không căn chỉnh theo thẻ khác => tự căn chỉnh theo chính nó */}
					<p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-6 text-md">
						TV Show
					</p>
					<div className="flex flex-col space-y-4">
						<h2 className="text-white text-[40px] font-bold">
							Nghe nói em thích tôi
						</h2>
						<div className="flex items-center space-x-3">
							<img
								src={IconRating}
								alt="Rating"
								className="w-8 h-8"
							/>
							<img
								src={IconRating}
								alt="Rating"
								className="w-8 h-8"
							/>
							<img
								src={IconRating}
								alt="Rating"
								className="w-8 h-8"
							/>
							<img
								src={IconRating}
								alt="Rating"
								className="w-8 h-8"
							/>
							<img
								src={IconRating}
								alt="Rating"
								className="w-8 h-8"
							/>
							<img
								src={IconHalfRating}
								alt="Rating"
								className="w-8 h-8"
							/>
						</div>
						<p className="text-white">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eos est maiores quasi dicta! Laboriosam enim
							vitae nesciunt excepturi, quis ex aperiam. Id
							consequuntur nostrum dignissimos reprehenderit?
							Labore blanditiis quod hic! vitae nesciunt
							excepturi, quis ex aperiam. Id consequuntur nostrum
							dignissimos reprehenderit? Labore blanditiis quod
							hic!
						</p>
						<div className="flex items-center space-x-4">
							<button className="px-4 py-3 text-white bg-black font-bold text-md cursor-pointer">
								Chi tiết
							</button>
							<button className="px-4 py-3 text-white bg-red-600 font-bold text-md cursor-pointer">
								Xem phim
							</button>
						</div>
					</div>
				</div>
				<div className="w-[50%] flex items-center justify-center">
					<div className="w-[300px] h-[400px] relative group cursor-pointer">
						<img
							src={ImgTemp}
							alt=""
							className="w-full h-full object-cover"
						/>
						<div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
							<img
								src={IconPlay}
								alt=""
								className="w-16 h-16 relative z-10"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
