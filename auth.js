auth.onAuthStateChanged(user => {
  if(user){
    db.collection('peserta').onSnapshot(snapshot =>{
    let changes = snapshot.docChanges();
    changes.forEach(change =>{
        if(change.type == 'added'){
            renderPeserta(change.doc);
            setupUI(user);
        } else if (change.type == 'removed'){
            let tr = document.querySelector('[data-id="' + change.doc.id + '"]');
            let div = document.querySelector('[data-info="' + change.doc.id + '"]');
            listPerformaPeserta.removeChild(div)
            let lokasi = document.querySelector('#lokasi' + change.doc.id).innerText;
            switch(lokasi){
                case "Tangerang":
                pesertaTgr.removeChild(tr);
                break;
                case "Depok":
                pesertaDpk.removeChild(tr);
                break;
                case "Jakarta Selatan":
                pesertaJkt.removeChild(tr);
                break;
                case "Jakarta Pusat":
                pesertaSnn.removeChild(tr);
            }

            let status = document.querySelector('#status-peserta' + change.doc.id).innerText;
            switch(status){
                case "Aktif":
                let opsi = document.querySelector('.opsi-target-peserta' + change.doc.id);
                document.querySelector('#target-peserta').removeChild(opsi);
            }
                let opsiKedua = document.querySelector('.opsi-target-peserta-kedua' + change.doc.id);
                document.querySelector('#target-peserta-kedua').removeChild(opsiKedua);

            $('#modaleditpeserta' + change.doc.id).modal('hide');
        } else if(change.type == 'modified'){
            renderUpdatePeserta(change.doc);
            let div = document.querySelector('[data-id="'+ change.doc.id +'"]');
            let lokasi = document.querySelector('#lokasi' + change.doc.id).innerText;
            switch(lokasi){
            case "Tangerang":
            pesertaTgr.appendChild(div);
            break;
            case "Depok":
            pesertaDpk.appendChild(div);
            break;
            case "Jakarta Selatan":
            pesertaJkt.appendChild(div);
            break;
            case "Jakarta Pusat":   
            pesertaSnn.appendChild(div);
            }
        }
    })
}, err => console.log(err.message))

    db.collection('tugasSelesai').onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                renderTugasSelesai(change.doc);
                setupUI(user);
            }else if (change.type == 'removed'){
                let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                tugasPesertaSelesai.removeChild(div);
                for(let x = 0;x<daftarKaryawan.length;x++){
                    let performaPeserta = document.querySelectorAll('.waktu-penyelesaian-' + daftarKaryawan[x].toLowerCase().replace(" ", "-"));
                    let sum=0;
                    for (let i=0;i<performaPeserta.length;i++) {
                        sum=sum + parseFloat(performaPeserta[i].childNodes[0].nodeValue);
                    }
                        let rataRataPenyelesaian = sum/performaPeserta.length;
                        let rataRataWaktuPenyelesaian;
                            if(rataRataPenyelesaian < 60000){
                                let perhitunganDetik = Math.floor(rataRataPenyelesaian/1000) + ' Detik';
                                rataRataWaktuPenyelesaian = perhitunganDetik;
                            } else if(rataRataPenyelesaian == 60000){
                                let perhitunganMenit = Math.floor(rataRataPenyelesaian/60000) + ' Menit ';
                                rataRataWaktuPenyelesaian = perhitunganMenit;
                            } else if(rataRataPenyelesaian > 60000){
                                let perhitunganMenit = Math.floor(rataRataPenyelesaian/60000) + ' Menit ';
                                let perhitunganDetik = Math.floor((rataRataPenyelesaian%60000)/1000) + ' Detik'
                                if(perhitunganDetik == '0 Detik'){
                                    perhitunganDetik = '';
                                }
                                rataRataWaktuPenyelesaian = perhitunganMenit + perhitunganDetik;
                            } else if(rataRataPenyelesaian == 3600000){
                                let perhitunganJam = Math.floor(rataRataPenyelesaian/3600000) + ' Jam ';
                                rataRataWaktuPenyelesaian = perhitunganJam;
                            } else if(rataRataPenyelesaian > 3600000){
                                let perhitunganJam = Math.floor(rataRataPenyelesaian/3600000) + ' Jam ';
                                let perhitunganMenit = Math.floor((rataRataPenyelesaian%(3600000))/60000) + ' Menit ';
                                let perhitunganDetik = Math.floor((rataRataPenyelesaian%(60000))/1000) + ' Detik';
                                if(perhitunganMenit == '0 Menit '){
                                    perhitunganMenit = '';
                                } else if(perhitunganDetik == '0 Detik'){
                                    perhitunganDetik = '';
                                }
                                rataRataWaktuPenyelesaian = perhitunganJam + perhitunganMenit + perhitunganDetik;
                            } else if(rataRataPenyelesaian == 86400000){
                                let perhitunganHari = Math.floor(rataRataPenyelesaian/86400000) + ' Hari';
                                rataRataWaktuPenyelesaian = perhitunganHari;
                            } else if(rataRataPenyelesaian > 86400000){
                                let perhitunganHari = Math.floor(rataRataPenyelesaian/86400000) + ' Hari';
                                let perhitunganJam = Math.floor((rataRataPenyelesaian%(86400000))/3600000) + ' Jam ';
                                let perhitunganMenit = Math.floor((rataRataPenyelesaian%(3600000))/60000) + ' Menit ';
                                let perhitunganDetik = Math.floor((rataRataPenyelesaian%(60000))/1000) + ' Detik';
                                if(perhitunganJam == '0 Jam '){
                                    perhitunganJam = '';
                                } else if(perhitunganMenit == '0 Menit '){
                                    perhitunganMenit = '';
                                } else if(perhitunganDetik == '0 Detik'){
                                    perhitunganDetik = '';
                                }
                                rataRataWaktuPenyelesaian = perhitunganHari + perhitunganJam + perhitunganMenit + perhitunganDetik;
                            } else if(rataRataPenyelesaian == 604800000){
                                let perhitunganMinggu = Math.floor(rataRataPenyelesaian/604800000) + ' Minggu ';
                                rataRataWaktuPenyelesaian = perhitunganMinggu;
                            } else if(rataRataPenyelesaian > 604800000){
                                let perhitunganMinggu = Math.floor(rataRataPenyelesaian/604800000) + ' Minggu ';
                                let perhitunganHari = Math.floor((rataRataPenyelesaian%(604800000))/86400000) + ' Hari';
                                let perhitunganJam = Math.floor((rataRataPenyelesaian%(86400000))/3600000) + ' Jam ';
                                let perhitunganMenit = Math.floor((rataRataPenyelesaian%(3600000))/60000) + ' Menit ';
                                let perhitunganDetik = Math.floor((rataRataPenyelesaian%(60000))/1000) + ' Detik';
                                if(perhitunganHari == '0 Hari '){
                                    perhitunganHari = '';
                                } else if(perhitunganJam == ' 0 Jam '){
                                    perhitunganJam = '';
                                } else if(perhitunganMenit == '0 Menit '){
                                    perhitunganMenit = '';
                                } else if(perhitunganDetik == '0 Detik'){
                                    perhitunganDetik = '';
                                }
                                rataRataWaktuPenyelesaian = perhitunganMinggu + perhitunganHari + perhitunganJam + perhitunganMenit + perhitunganDetik;
                            }

                        for(let x = 0;x<daftarKaryawan.length;x++){
                        let jumlahTugasTerlambat = document.querySelectorAll('.terlambat' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).length;
                        let jumlahTugasSelesai = document.querySelectorAll('.tugasseseorangselesai' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).length;
                        if(document.querySelector('#jumlah-tugas-selesai-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")) != null && document.querySelector('#rata-rata-waktu-penyelesaian-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")) != null && document.querySelector('#jumlah-tugas-terlambat-selesai-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")) != null){
                        if(jumlahTugasSelesai == 0){
                        document.querySelector('#jumlah-tugas-selesai-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = 'belum terlibat dalam penugasan tertentu.';
                        document.querySelector('#rata-rata-waktu-penyelesaian-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = '';
                        document.querySelector('#jumlah-tugas-terlambat-selesai-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = '';
                        }else if(jumlahTugasSelesai != 0 && jumlahTugasTerlambat != 0){
                        document.querySelector('#jumlah-tugas-selesai-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = 'telah menyelesaikan ' + jumlahTugasSelesai + ' tugas';
                        document.querySelector('#rata-rata-waktu-penyelesaian-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = ' dengan rata-rata waktu penyelesaian ' + rataRataWaktuPenyelesaian;
                        document.querySelector('#jumlah-tugas-terlambat-selesai-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = ', terlambat menyelesaikan ' + jumlahTugasTerlambat + ' tugas.';
                        }else if(jumlahTugasSelesai != 0 && jumlahTugasTerlambat == 0){
                        document.querySelector('#jumlah-tugas-selesai-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = 'telah menyelesaikan ' + jumlahTugasSelesai + ' tugas';
                        document.querySelector('#rata-rata-waktu-penyelesaian-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = ' dengan rata-rata waktu penyelesaian ' + rataRataWaktuPenyelesaian;
                        document.querySelector('#jumlah-tugas-terlambat-selesai-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = ', tidak pernah terlambat menyelesaikan tugas.';
                        }
                    } else {
                        return false;
                    }
                }

                        let tampilanPerforma = document.querySelectorAll('.performa-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-"));
                        for(let i = 0;i<tampilanPerforma.length;i++){
                            if(rataRataWaktuPenyelesaian == null){
                                rataRataWaktuPenyelesaian = "-";
                                tampilanPerforma[i].innerText = rataRataWaktuPenyelesaian;
                            }
                    }
                }
            }
        })
    }, err => console.log(err.message))

    db.collection('tugas').onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                renderTugas(change.doc);
                setupUI(user);
            }else if (change.type == 'removed'){
                let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                tugasPeserta.removeChild(div);
            } else if(change.type == 'modified'){
                renderUpdateTugas(change.doc);
            }
        })
    }, err => console.log(err.message))

        db.collection('kesalahan').onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                renderKesalahan(change.doc);
                setupUI(user);
            }else if (change.type == 'removed'){
                let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                kesalahanPeserta.removeChild(div);
                for(let x = 0;x<daftarKaryawan.length;x++){
                    let kesalahanPeserta = document.querySelectorAll('.kesalahanseseorang' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).length;
                    if(kesalahanPeserta == 0){
                    document.querySelector('#jumlah-kesalahan-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = 'sejauh ini tidak memiliki kesalahan atau terlibat dalam masalah';
                    } else {
                    document.querySelector('#jumlah-kesalahan-peserta-' + daftarKaryawan[x].toLowerCase().replace(" ", "-")).innerHTML = 'Memiliki kesalahan dengan jumlah keseluruhan ' + kesalahanPeserta;
                    }
                }
            } else if(change.type == 'modified'){
                renderUpdateKesalahan(change.doc);
            }
        })
    }, err => console.log(err.message))

        db.collection('swot').onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                renderSwot(change.doc);
                setupUI(user);
            } else if (change.type == 'removed'){
                let tr = document.querySelector('[data-id="' + change.doc.id + '"]');
                let analisis = document.querySelector('#analisis-swot-body' + change.doc.id).innerText;
                switch(analisis){
                    case "Strength":
                    analisisStr.removeChild(tr);
                    break;
                    case "Weakness":
                    analisisWks.removeChild(tr);
                    break;
                    case "Oportunity":
                    analisisOpt.removeChild(tr);
                    break;
                    case "Threat":
                    analisisThr.removeChild(tr);
                }

                $('#modaleditpeserta' + change.doc.id).modal('hide');
            } else if(change.type == 'modified'){
                renderUpdateSwot(change.doc);
                let tr = document.querySelector('[data-id="' + change.doc.id + '"]');
                let analisis = document.querySelector('#analisis-swot-body' + change.doc.id).innerText;
                switch(analisis){
                case "Strength":
                analisisStr.appendChild(tr);
                break;
                case "Weakness":
                analisisWks.appendChild(tr);
                break;
                case "Oportunity":
                analisisOpt.appendChild(tr);
                break;
                case "Threat":   
                analisisThr.appendChild(tr);
                }
            }
        })
    }, err => console.log(err.message))

        db.collection('achievement').onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                renderAchievement(change.doc);
                setupUI(user);
            }else if (change.type == 'removed'){
                let tr = document.querySelector('[data-id="' + change.doc.id + '"]');
                listPencapaian.removeChild(tr);
            } else if(change.type == 'modified'){
                renderUpdateAchievement(change.doc);
                let items = $('#list-achievement > .achievement').get();
                items.sort(function(a, b) {
                let keyA = $(a).data('date');
                let keyB = $(b).data('date');
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
                })
                let daftarAchievement = $('#list-achievement');
                $.each(items, function(i, div) {
                daftarAchievement.append(div);
                })
            }
        })
    }, err => console.log(err.message))
        
    setupUI(user);
  } else {
    setupUI();
  }
})



  


const daftarPeserta = document.querySelector('#tambah-peserta');
daftarPeserta.addEventListener('submit', (e) => {
    e.preventDefault();
    let nama = document.querySelector('#nama-peserta').value;
    let email = document.querySelector('#email-peserta').value;
    if(!email.includes('galaxy.id')){
        alert('Pastikan email domain peserta adalah @galaxy.id');
        document.querySelector('#email-peserta').value = '';
    } else if(daftarKaryawan.includes(nama.toLowerCase().replace(" ", "-")) && daftarEmailKaryawan.includes(email)){
        alert('Nama dan alamat email ini telah digunakan!')
        document.querySelector('#nama-peserta').value = '';
        document.querySelector('#email-peserta').value = '';
    } else if(daftarKaryawan.includes(nama.toLowerCase().replace(" ", "-")) && !daftarEmailKaryawan.includes(email)){
        alert('Nama ini telah digunakan!')
        document.querySelector('#nama-peserta').value = '';
    } else if(daftarEmailKaryawan.includes(email) && !daftarKaryawan.includes(nama.toLowerCase().replace(" ", "-"))){
        alert('alamat ini telah digunakan!')
        document.querySelector('#email-peserta').value = '';
    }  else {
    db.collection('peserta').add({
        nama : daftarPeserta['nama-peserta'].value,
        libur : daftarPeserta['hari-libur'].value,
        lokasi : daftarPeserta['lokasi-berjaga'].value,
        email : daftarPeserta['email-peserta'].value
    }).then(() => {
        $('#modaldaftarpeserta').modal('hide');
        document.querySelector('#tambah-peserta').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;
    });
    }
});


const daftarTugas = document.querySelector('#tambah-tugas');
daftarTugas.addEventListener('submit', (e) => {
    e.preventDefault();
    if(document.querySelector('#per-minggu').value == "" && document.querySelector('#per-hari').value == "" && document.querySelector('#per-jam').value == "" && document.querySelector('#per-menit').value == ""){
        alert("Pastikan Mengisi Kolom Waktu Pengerjaan untuk Melanjuti Proses Tambah Tugas");
    }else{
    let tanggal = new Date();
    let waktuRilis = tanggal.getTime();
    let dd = String(tanggal.getDate()).padStart(2, '0');
    let mm = String(tanggal.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = tanggal.getFullYear();
    let hh = ('0' + tanggal.getHours()).slice(-2);
    let ms = ('0' + tanggal.getMinutes()).slice(-2);
    tanggal = dd + '/' + mm + '/' + yyyy + ', ' + hh + ':' + ms;
    db.collection('tugas').add({
        namaPeserta : daftarTugas['target-peserta'].value,
        kontenTugas : daftarTugas['konten-tugas'].value.replace(/\n\r?/g, '<br/>'),
        perMinggu : daftarTugas['per-minggu'].value,
        perHari : daftarTugas['per-hari'].value,
        perJam : daftarTugas['per-jam'].value,
        perMenit : daftarTugas['per-menit'].value,
        waktuRilis : waktuRilis,
        tanggalLuncur : tanggal 
    }).then(() => {
        $('#modaltambahtugas').modal('hide');
        document.querySelector('#tambah-tugas').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;
    });
  }
});

const daftarKesalahan = document.querySelector('#tambah-kesalahan');
daftarKesalahan.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggalSekarang = new Date();
    let hari = String(tanggalSekarang.getDate()).padStart(2, '0');
    let bulan = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
    let tahun = tanggalSekarang.getFullYear();
    tanggalSekarang = tahun + '-' + bulan + '-' + hari;
    if(document.querySelector('#tanggal-kesalahan').value > tanggalSekarang){
      alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
    } else if(document.querySelector('#tanggal-kesalahan').value == 0){
    let tanggal = new Date().getTime();
    db.collection('kesalahan').add({
        tanggal: tanggal,
        nama: daftarKesalahan['target-peserta-kedua'].value,
        kontenKesalahan: daftarKesalahan['konten-kesalahan'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modaltambahkesalahan').modal('hide');
        document.querySelector('#tambah-kesalahan').reset();
    })
   
  } else {
    db.collection('kesalahan').add({
        tanggal: daftarKesalahan['tanggal-kesalahan'].value,
        nama: daftarKesalahan['target-peserta-kedua'].value,
        kontenKesalahan: daftarKesalahan['konten-kesalahan'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modaltambahkesalahan').modal('hide');
        document.querySelector('#tambah-kesalahan').reset();
    });
  }
});

const daftarSwot = document.querySelector('#tambah-swot');
daftarSwot.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('swot').add({
        analisis : daftarSwot['analisis-swot'].value,
        kontenAnalisis : daftarSwot['konten-analisis'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modalswot').modal('hide');
        document.querySelector('#tambah-swot').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;
    });
});

const daftarAchievement = document.querySelector('#tambah-achievement');
daftarAchievement.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggalSekarang = new Date();
    let hari = String(tanggalSekarang.getDate()).padStart(2, '0');
    let bulan = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
    let tahun = tanggalSekarang.getFullYear();
    tanggalSekarang = tahun + '-' + bulan + '-' + hari;
    if(document.querySelector('#tanggal-pencapaian').value > tanggalSekarang){
      alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
    } else if(document.querySelector('#tanggal-pencapaian').value == 0){
    let tanggal = new Date().getTime();
    db.collection('achievement').add({
        tanggal: tanggal,
        kontenPencapaian: daftarAchievement['konten-pencapaian'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modalachievement').modal('hide');
        document.querySelector('#tambah-achievement').reset();
    })
   
  } else {
    db.collection('achievement').add({
        tanggal: daftarAchievement['tanggal-pencapaian'].value,
        kontenPencapaian: daftarAchievement['konten-pencapaian'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modalachievement').modal('hide');
        document.querySelector('#tambah-achievement').reset();
    });
  }
})
// signup

const formDaftar = document.querySelector('#form-daftar');
formDaftar.addEventListener('submit', (e) => {
  e.preventDefault();
 
  // get user info
  const email = formDaftar['emaildaftar'].value;
  const password = formDaftar['passworddaftar'].value;

if(email.includes('galaxy.id')){

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('pengguna').doc(cred.user.uid).set({
      username : formDaftar['username'].value
    });
  }).then(() => {
        // close the signup modal & reset form
      $('#modaldaftar').modal('hide');
      formDaftar.reset();
        });
    } else {
       alert('Data Tidak Valid');
       formDaftar.reset();
    }
});
// logout
const keluar = document.querySelector('#sign-out');
keluar.addEventListener('click', (e) => {
  e.preventDefault();
  let konfirmasi = confirm("Apa anda yakin ingin keluar?");
  if(konfirmasi){
  auth.signOut();
  window.location.reload();
  }
});

// login
const formMasuk = document.querySelector('#form-masuk');
formMasuk.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = formMasuk['emailmasuk'].value;
  const password = formMasuk['passwordmasuk'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
      $('#modallogin').modal('hide');
      formMasuk.reset();
  });

});

