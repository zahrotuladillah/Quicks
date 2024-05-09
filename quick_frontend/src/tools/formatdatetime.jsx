export default function FormatDateTime(dateTimeString) {
  // Membuat objek Date dari string tanggal
  const dateObject = new Date(dateTimeString);

  // Mendapatkan tanggal, bulan, tahun, jam, dan menit dari objek Date
  const day = dateObject.getDate().toString().padStart(2, "0"); // Tambahkan "0" di depan jika tanggal kurang dari 10
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Bulan dimulai dari 0, sehingga perlu ditambah 1
  const year = dateObject.getFullYear();
  const hours = dateObject.getHours().toString().padStart(2, "0"); // Tambahkan "0" di depan jika jam kurang dari 10
  const minutes = dateObject.getMinutes().toString().padStart(2, "0"); // Tambahkan "0" di depan jika menit kurang dari 10

  // Gabungkan tanggal, bulan, tahun, jam, dan menit ke dalam format yang diinginkan
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
