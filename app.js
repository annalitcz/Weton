var isTanggal = document.getElementById("tanggal");
var isBulan = document.getElementById("bulan");
var isTahun = document.getElementById("tahun");
var isHasil = document.getElementById("result");
var isHitung = document.getElementById("submit");

isHitung.addEventListener("click", function () {
  var tanggalLahir = new Date(
    isTahun.value,
    isBulan.selectedIndex,
    isTanggal.value
  );
  isHasil.innerHTML =
    "Weton Kamu adalah " +
    hitunghari(tanggalLahir) +
    " " +
    hitungpasaran(tanggalLahir);
});

function hitunghari(_tanggal) {
  _hari = _tanggal.getDay();

  switch (_hari) {
    case 0:
      return "Minggu";
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jum'at";
    case 6:
      return "Sabtu";
    default:
      return "";
  }
}
function hitungpasaran(_tanggal) {
  var awal = new Date(70, 0, 2);
  var pembagian = (_tanggal.getTime() - awal.getTime() + 86400000) / 432000000;
  //86400000 merupakan jumlah milisecond dari 1 hari dan 432000000 merupakan jumlah milisecond 5 hari
  var sisa = Math.round((pembagian - Math.floor(pembagian)) * 10) / 2;

  switch (sisa) {
    case 0:
      return "Wage";
    case 1:
      return "Kliwon";
    case 2:
      return "Legi";
    case 3:
      return "Pahing";
    case 4:
      return "Pon";
    default:
      return "";
  }
}
/* Dalam sistem penanggalan Jawa, setiap hari dianggap memiliki energi yang berbeda-beda. 
     Setiap energi tersebut diberi nama sesuai dengan hari keberapa setelah tanggal 2 Januari 1970.

     Nama-nama hari dalam sistem penanggalan Jawa adalah:
      1. Legi: hari ke-3 setelah tanggal 2 Januari 1970
      2. Pahing: hari ke-4 setelah tanggal 2 Januari 1970
      3. Pon: hari ke-5 setelah tanggal 2 Januari 1970
      4. Wage: hari ke-6 setelah tanggal 2 Januari 1970
      5. Kliwon: hari ke-7 setelah tanggal 2 Januari 1970
  
    Jumlah hari yang digunakan dalam sistem penanggalan Jawa adalah 5 hari.*/
