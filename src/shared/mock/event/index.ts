export const eventData = [
    {
        title: "WorkShop",
        description:
            "Đổi mới tự động hoá trong thời đại 4.0",
        address: "Phòng New York, Tầng 4, Toà 6th Element",
        time: "20 thg 7 2023",
        image:
            "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg",
    },
    {
        title: "On board",
        description:
            "Chào mừng thành viên NGS mới gia nhập",
        time: "20 thg 7 2023",

        address: "Phòng Công nghệ, Tầng 4, Toà 6th Element",
        image:
            "https://vanhoadoisong.vn/wp-content/uploads/2022/10/51-background-hinh-nen-powerpoint-ve-marketing-full-hd-thumbnail.jpg",
    },
    {
        title: "Training",
        description:
            "Chúng tôi tự hào chia sẻ những case study đặc biệt, trong đó chúng tôi đã giúp các khách hàng vượt qua thách thức và đạt được thành công đáng kể",
        address: "Phòng Toronto, Tầng 4, Toà 6th Element",
        time: "20 thg 7 2023",
        image:
            "https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg",
    },
];
export interface IEvent {
    title: string,
    description: string
    address: string
    time: string
    image: string
}