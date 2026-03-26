// --- CẤU HÌNH HỆ THỐNG GIAO TIẾP ---
const hks_duongDanGiaoTiep_str = "https://script.google.com/macros/s/AKfycbwY_LDKefb80LVnegm_IwoSWzvpAuZB7cLqefApUW4eDiYG3Qc4JYqjLgoJT8SRKG9W/exec"; 

// --- HÀM KẾT NỐI API CHUNG ---
async function hks_thucThiGiaoTiep_fn(hks_lenhDieuPhoi_str, hks_goiDuLieu_obj = {}) {
    hks_goiDuLieu_obj.hks_lenhKichHoat_str = hks_lenhDieuPhoi_str;
    try {
        const hks_phanHoiNhanCung_obj = await fetch(hks_duongDanGiaoTiep_str, {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(hks_goiDuLieu_obj)
        });
        return await hks_phanHoiNhanCung_obj.json();
    } catch (hks_loiNgoaiLe_obj) {
        console.error("Lỗi Fetch API:", hks_loiNgoaiLe_obj);
        throw new Error("Lỗi kết nối Server. Vui lòng kiểm tra lại mạng hoặc link API!");
    }
}
