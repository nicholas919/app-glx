

document.querySelector('#tombol-tangerang').addEventListener('click', (e) =>{
    pesertaTgr.style.display = "table-row-group";
    pesertaDpk.style.display = "none"; 
    pesertaJkt.style.display = "none";
    pesertaSnn.style.display = "none";  
})

document.querySelector('#tombol-depok').addEventListener('click', (e) =>{
    pesertaTgr.style.display = "none";
    pesertaDpk.style.display = "table-row-group"; 
    pesertaJkt.style.display = "none";
    pesertaSnn.style.display = "none";  
})

document.querySelector('#tombol-jaksel').addEventListener('click', (e) =>{
    pesertaTgr.style.display = "none";
    pesertaDpk.style.display = "none"; 
    pesertaJkt.style.display = "table-row-group";
    pesertaSnn.style.display = "none";  
})

document.querySelector('#tombol-jakpus').addEventListener('click', (e) =>{
    pesertaTgr.style.display = "none";
    pesertaDpk.style.display = "none"; 
    pesertaJkt.style.display = "none";
    pesertaSnn.style.display = "table-row-group";  
})

document.querySelector('#tombol-strength').addEventListener('click', (e) =>{
    analisisStr.style.display = "table-row-group";
    analisisWks.style.display = "none"; 
    analisisOpt.style.display = "none";
    analisisThr.style.display = "none";  
})

document.querySelector('#tombol-weakness').addEventListener('click', (e) =>{
    analisisStr.style.display = "none";
    analisisWks.style.display = "table-row-group"; 
    analisisOpt.style.display = "none";
    analisisThr.style.display = "none";  
})

document.querySelector('#tombol-oportunity').addEventListener('click', (e) =>{
    analisisStr.style.display = "none";
    analisisWks.style.display = "none"; 
    analisisOpt.style.display = "table-row-group";
    analisisThr.style.display = "none";  
})

document.querySelector('#tombol-threat').addEventListener('click', (e) =>{
    analisisStr.style.display = "none";
    analisisWks.style.display = "none"; 
    analisisOpt.style.display = "none";
    analisisThr.style.display = "table-row-group";  
})

let tombolMasuk = document.querySelector('#sign-in');
tombolMasuk.addEventListener('click' , function(e){
    document.querySelector('#form-daftar').setAttribute('style','display:none !important;');
    document.querySelector('#form-masuk').setAttribute('style','display:block !important;');
})

let tombolDaftar = document.querySelector('#sign-up');
tombolDaftar.addEventListener('click' , function(e){
    document.querySelector('#form-daftar').setAttribute('style','display:block !important;');
    document.querySelector('#form-masuk').setAttribute('style','display:none !important;');
})

const pesertaTgr = document.querySelector('#list-peserta-tgr');
const pesertaDpk = document.querySelector('#list-peserta-dpk');
const pesertaJkt = document.querySelector('#list-peserta-jkt');
const pesertaSnn = document.querySelector('#list-peserta-snn');
const modalPeserta = document.querySelector('#modal-edit-peserta');
const listPerformaPeserta = document.querySelector('#list-performa-peserta');

const daftarKaryawan = [];
const daftarEmailKaryawan = [];
function renderPeserta(doc){
    let tr = document.createElement('tr');
    let div = document.createElement('div');
    let peserta = document.createElement('div');
    let nama = doc.data().nama;
    let libur = doc.data().libur;
    let lokasi = doc.data().lokasi;
    let email = doc.data().email;
    daftarEmailKaryawan.push(email);
    daftarKaryawan.push(nama.toLowerCase().replace(" ", "-"));
    let opsiTugas = document.createElement('option');
    let opsiTugasKedua = document.createElement('option');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('data-toggle', 'modal');
    tr.setAttribute('data-target', '#modaleditpeserta' + doc.id);
    tr.setAttribute('id','peserta' + doc.id);
    tr.classList.add('dokumentasi-peserta' + doc.id, nama.toLowerCase().replace(" ", "-"), 'peserta');
    div.setAttribute('data-info', doc.id);
    div.classList.add('dokumentasi-peserta-kedua' + doc.id);
    opsiTugas.classList.add('opsi-target-peserta' + doc.id, 'pemilihan-tugas-peserta');
    opsiTugasKedua.classList.add('opsi-target-peserta-kedua' + doc.id, 'pemilihan-tugas-peserta-kedua');
    opsiTugas.innerHTML = nama;
    opsiTugasKedua.innerHTML = nama;
    tr.innerHTML = `
    <td style="font-weight:bold;" id="nama-table${doc.id}">${nama}</td>
    <td id="lokasi-table${doc.id}">${lokasi}</td>
    <td id="libur-table${doc.id}">${libur}</td>
    <td id="email-table${doc.id}" class="email-table">${email}</td>
    <td id="status-td-peserta${doc.id}" style="font-weight:bold;"></td>
    `

    div.innerHTML = `<div id="performa-peserta-${nama.toLowerCase().replace(" ", "-")}"><span style="font-weight:bold;" id="peserta${doc.id}"><i class='fas fa-user'></i> ${nama} </span><span id="jumlah-kesalahan-peserta-${nama.toLowerCase().replace(" ", "-")}">sejauh ini tidak memiliki kesalahan atau terlibat dalam masalah</span>, <span id="jumlah-tugas-selesai-peserta-${nama.toLowerCase().replace(" ", "-")}">belum terlibat dalam penugasan tertentu.</span> <span id="rata-rata-waktu-penyelesaian-peserta-${nama.toLowerCase().replace(" ", "-")}"></span><span id="jumlah-tugas-terlambat-selesai-peserta-${nama.toLowerCase().replace(" ", "-")}"></span></div>`

    peserta.innerHTML = `
<div class="modal fade" id="modaleditpeserta${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pengaturan Karyawan</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div id="data-peserta">
        <div id="info-peserta">
        <div>Nama</div>
        <div>:</div>
        <div style="font-weight:bold;" id="nama${doc.id}">${nama.toUpperCase()}</div>
        <div>Hari Libur</div>
        <div>:</div>        
        <div style="font-weight:bold;" id="libur${doc.id}">${libur}</div>
        <div>Lokasi Berjaga</div>
        <div>:</div> 
        <div id="lokasi${doc.id}" style="font-weight:bold;">${lokasi}</div>
        <div class="body-email">Email Karyawan</div>
        <div class="body-email">:</div> 
        <div id="email${doc.id}" style="font-weight:bold;" class="body-email">${email}</div>
        <div>Performa Penyelesaian Tugas</div>
        <div>:</div> 
        <div id="performa-peserta${doc.id}" class="performa-peserta-${nama.toLowerCase().replace(" ", "-")}" style="font-weight:bold;">-</div>
        <div>Status</div>
        <div>:</div> 
        <div id="status-peserta${doc.id}" style="font-weight:bold;"></div>
        </div>
        <div id="edit${doc.id}" class="btn btn-warning edit edit-peserta">Edit Data Karyawan</div>
        <div id="hapus${doc.id}" class="btn btn-danger hapus hapus-peserta">Hapus Data Karyawan</div>
        </div>
          <form id="modal-peserta${doc.id}" class="modal-peserta">
                <div class="form-group">
                  <label class="col-form-label">Hari Libur <small>(Note: Hari Libur bisa diganti sewaktu-waktu)</small></label>
                <select class="form-control seleksi" id="hari-libur${doc.id}" required>
                    <option class="opsi-libur${doc.id}" id="test">Senin</option>
                    <option class="opsi-libur${doc.id}">Selasa</option>
                    <option class="opsi-libur${doc.id}">Rabu</option>
                    <option class="opsi-libur${doc.id}">Kamis</option>
                    <option class="opsi-libur${doc.id}">Jum'at</option>
                    <option class="opsi-libur${doc.id}">Sabtu</option>
                    <option class="opsi-libur${doc.id}">Minggu</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Lokasi Berjaga <small>(Note: Lokasi Berjaga bisa diganti sewaktu-waktu)</small></label>
                <select class="form-control seleksi" id="lokasi-berjaga${doc.id}" required>
                    <option class="opsi-lokasi${doc.id}">Tangerang</option>
                    <option class="opsi-lokasi${doc.id}">Depok</option>
                    <option class="opsi-lokasi${doc.id}">Jakarta Selatan</option>
                    <option class="opsi-lokasi${doc.id}">Jakarta Pusat</option>
                  </select>
                </div>
                <div class="modal-footer">
                      <button class="btn btn-danger" data-dismiss="modal">Tutup</button>
                      <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
            </div>
          </div>
       </div>
     </div>
    `

    switch(lokasi){
        case "Tangerang":
        pesertaTgr.appendChild(tr);
        break;
        case "Depok":
        pesertaDpk.appendChild(tr);
        break;
        case "Jakarta Selatan":
        pesertaJkt.appendChild(tr);
        break;
        case "Jakarta Pusat":
        pesertaSnn.appendChild(tr);
        }

    listPerformaPeserta.appendChild(div);
    modalPeserta.appendChild(peserta);

    $(document).ready(function() {
    db.collection('tugas').onSnapshot(snapshot =>{
    let items = $('#list-tugas-peserta > .tugasseseorang').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
    })
    let daftarTugas = $('#list-tugas-peserta');
    $.each(items, function(i, div) {
    daftarTugas.append(div);
  })
  })
})

    let hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    let hariIni = new Date();
    let hariLibur = hariIni.getDay();
    let penentuanLibur = hari[hariLibur];
    if(penentuanLibur == libur){
        document.querySelector('#status-td-peserta' + doc.id).innerText = "Non-Aktif";
        document.querySelector('#status-td-peserta' + doc.id).style.color = "#e61c33";
        document.querySelector('#status-peserta' + doc.id).innerText = "Non-Aktif";
        document.querySelector('#status-peserta' + doc.id).style.color = "#e61c33";
    } else {
        document.querySelector('#status-td-peserta' + doc.id).innerText = "Aktif";
        document.querySelector('#status-td-peserta' + doc.id).style.color = "#13eb5e";
        document.querySelector('#status-peserta' + doc.id).innerText = "Aktif";
        document.querySelector('#status-peserta' + doc.id).style.color = "#13eb5e";
        }

let pilihanLibur = document.querySelector('#hari-libur' + doc.id);
let opsiLibur;
for(let x = 0; x<pilihanLibur.options.length; x++){
    opsiLibur = pilihanLibur.options[x];
    if(opsiLibur.value == libur){
        opsiLibur.setAttribute('selected', 'selected');
        }
    }

let pilihanLokasi = document.querySelector('#lokasi-berjaga' + doc.id);
let opsiLokasi;
for(let x = 0; x<pilihanLokasi.options.length; x++){
    opsiLokasi = pilihanLokasi.options[x];
    if(opsiLokasi.value == lokasi){
        opsiLokasi.setAttribute('selected', 'selected');
        }
    }

let status = document.querySelector('#status-peserta' + doc.id).innerText;
    switch(status){
        case "Aktif":
        document.querySelector('#target-peserta').appendChild(opsiTugas);
    }
        document.querySelector('#target-peserta-kedua').appendChild(opsiTugasKedua);

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-peserta' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            let liburPeserta = document.querySelector('#hari-libur' + doc.id).value;
            let lokasiPeserta = document.querySelector('#lokasi-berjaga' + doc.id).value;

            db.collection('peserta').doc(doc.id).update({
                nama : nama,
                libur : liburPeserta,
                lokasi : lokasiPeserta
            }).then(() => {
                formEdit.style.display = "none";
            })
        })
    })
    
    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', function(e){
    e.stopPropagation();
    let konfirmasi = confirm('Anda yakin ingin menghapus data karyawan ini?');
    if(konfirmasi == true){
        let konfirmasiKedua = confirm('Semua yang berkaitan dengan data karyawan seperti tugas, histori tugas selesai maupun kesalahan karyawan akan dihapus juga.')
        if(konfirmasiKedua == true){
    $(document).ready(function() {
    let tugasPeserta = document.querySelectorAll('.tugasseseorang' + nama.toLowerCase().replace(" ", "-"))
    for(let x = 0;x<tugasPeserta.length;x++){
            let id = tugasPeserta[x].getAttribute('data-id')
            db.collection('tugas').doc(id).delete();
        }

    let tugasPesertaSelesai = document.querySelectorAll('.tugasseseorangselesai' + nama.toLowerCase().replace(" ", "-"))
    for(let x = 0;x<tugasPesertaSelesai.length;x++){
            let id = tugasPesertaSelesai[x].getAttribute('data-id')
            db.collection('tugasSelesai').doc(id).delete()
        }

    let kesalahanPeserta = document.querySelectorAll('.kesalahanseseorang' + nama.toLowerCase().replace(" ", "-"))
    for(let x = 0;x<kesalahanPeserta.length;x++){
            let id = kesalahanPeserta[x].getAttribute('data-id')
            db.collection('kesalahan').doc(id).delete()
        }
})  
    let id = document.querySelector('.dokumentasi-peserta' + doc.id).getAttribute('data-id');
    db.collection('peserta').doc(id).delete();
    $('#modaleditpeserta' + doc.id).modal('hide');
            }
        }
    })
}

const analisisStr = document.querySelector('#list-strength');
const analisisWks = document.querySelector('#list-weakness');
const analisisOpt = document.querySelector('#list-oportunity');
const analisisThr = document.querySelector('#list-threat');
const modalSwot = document.querySelector('#modal-edit-swot')
function renderSwot(doc){
    let tr = document.createElement('tr');
    let swot = document.createElement('div');
    let analisis = doc.data().analisis;
    let kontenAnalisis = doc.data().kontenAnalisis;
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('data-toggle', 'modal');
    tr.setAttribute('data-target', '#modaleditswot' + doc.id);
    tr.setAttribute('id','swot' + doc.id);
    tr.classList.add('dokumentasi-swot' + doc.id, 'swot');
    tr.innerHTML = `
    <td style="font-weight:bold;" id="analisis-swot-table${doc.id}">${analisis}</td>
    <td id="konten-analisis-table${doc.id}">${kontenAnalisis}</td>
    `
    swot.innerHTML = `
<div class="modal fade" id="modaleditswot${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pengaturan Analisis</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div id="data-analisis">
        <div id="info-analisis">
        <div id="analisis-swot-body${doc.id}" style="text-align:center;font-size:24px;font-weight:bold;">${analisis}</div>
        <div id="konten-analisis-body${doc.id}">${kontenAnalisis}</div>
        </div>
        <div id="edit${doc.id}" class="btn btn-warning edit edit-analisis">Edit Data Analisis SWOT</div>
        <div id="hapus${doc.id}" class="btn btn-danger hapus hapus-analisis">Hapus Data Analisis SWOT</div>
        </div>
          <form id="modal-analisis${doc.id}" class="modal-analisis">
                <div class="form-group">
                  <label class="col-form-label">SWOT Analisis</label>
                    <select class="form-control seleksi" id="analisis-swot${doc.id}" required>
                      <option value="" disabled selected hidden>-</option>
                      <option>Strength</option>
                      <option>Weakness</option>
                      <option>Oportunity</option>
                      <option>Threat</option>
                    </select>
                </div>
              <div class="form-group">
                <label>Konten Analisis</label>
              <textarea oninput="auto_grow(this)" class="form-control" id="konten-analisis${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenAnalisis.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
              </div>
                <div class="modal-footer">
                      <button class="btn btn-danger" data-dismiss="modal">Tutup</button>
                      <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
            </div>
          </div>
       </div>
     </div>
    `

    modalSwot.appendChild(swot);

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

    



let pilihanAnalisis = document.querySelector('#analisis-swot' + doc.id);
let opsiAnalisis;
for(let x = 0; x<pilihanAnalisis.options.length; x++){
    opsiAnalisis = pilihanAnalisis.options[x];
    if(opsiAnalisis.value == analisis){
        opsiAnalisis.setAttribute('selected', 'selected');
        }
    }

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-analisis' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            let analisisUpdate = document.querySelector('#analisis-swot' + doc.id).value;
            let kontenAnalisisUpdate = document.querySelector('#konten-analisis' + doc.id).value;
            db.collection('swot').doc(doc.id).update({
                analisis : analisisUpdate,
                kontenAnalisis : kontenAnalisisUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                formEdit.style.display = "none";
            })
        })
    })
    
    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', function(e){
    e.stopPropagation();
    let konfirmasi = confirm('Anda yakin ingin menghapus data analisis swot ini?');
    if(konfirmasi == true){
    let id = document.querySelector('.dokumentasi-swot' + doc.id).getAttribute('data-id');
    db.collection('swot').doc(id).delete();
    $('#modaleditswot' + doc.id).modal('hide');
        }
    })
}

const itemKeluar = document.querySelectorAll('.item-keluar');
const itemMasuk = document.querySelectorAll('.item-masuk');
const setupUI = (user) => {    
  if (user) {
        let x = window.matchMedia("(max-width: 800px)");
        db.collection('pengguna').doc(user.uid).get().then(doc => {
        let editPeserta = document.querySelectorAll('.edit-peserta');
        let hapusPeserta = document.querySelectorAll('.hapus-peserta');
        let editTugas = document.querySelectorAll('.edit-tugas');
        let hapusTugas = document.querySelectorAll('.hapus-tugas');
        let copyTugasSelesai = document.querySelectorAll('.copy-tugas-selesai');
        let hapusTugasSelesai = document.querySelectorAll('.hapus-tugas-selesai');
        let editKesalahan = document.querySelectorAll('.edit-kesalahan');
        let hapusKesalahan = document.querySelectorAll('.hapus-kesalahan');
        let peserta = document.querySelectorAll('.peserta');
        let tugas = document.querySelectorAll('.tugasseseorang');
        let tugasSelesai = document.querySelectorAll('.tugasseseorangselesai');
        let kesalahan = document.querySelectorAll('.kesalahanseseorang');
        let bodyEmail = document.querySelectorAll('.body-email');
        let emailTable = document.querySelectorAll('.email-table');
        let username = doc.data().username;
        document.querySelector('#nama-peserta-masuk').innerHTML = username
        if(username == "Admin Galaxy" && user.email == 'useradmin@galaxy.id'){
            myFunction(x);
            x.addListener(myFunction);
            function myFunction(x){
            if (x.matches) { // If media query matches
                    document.querySelector('#halaman-tugas').style.display = 'block';
                    for(let x = 0; x<emailTable.length;x++){
                    emailTable[x].setAttribute('style','display:none !important;');
                    }
                    document.querySelector('#th-email').style.display = 'none';
            } else {
                    document.querySelector('#halaman-tugas').style.display = 'grid';
                    for(let x = 0; x<emailTable.length;x++){
                    emailTable[x].setAttribute('style','display:block !important;');
                    }
                    document.querySelector('#th-email').style.display = 'revert';
            }
        }
            console.log("YES YES");
            for(let x = 0; x<editPeserta.length;x++){
            editPeserta[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<hapusPeserta.length;x++){
            hapusPeserta[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<editTugas.length;x++){
            editTugas[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<hapusTugas.length;x++){
            hapusTugas[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<copyTugasSelesai.length;x++){
            copyTugasSelesai[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<hapusTugasSelesai.length;x++){
            hapusTugasSelesai[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<editKesalahan.length;x++){
            editKesalahan[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<hapusKesalahan.length;x++){
            hapusKesalahan[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<peserta.length;x++){
            peserta[x].style.display = 'table-row';
            }
            for(let x = 0; x<tugas.length;x++){
            tugas[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<tugasSelesai.length;x++){
            tugasSelesai[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<kesalahan.length;x++){
            kesalahan[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<bodyEmail.length;x++){
            bodyEmail[x].setAttribute('style','display:block !important;');
            }
            document.querySelector('#home').style.display = 'block';
            document.querySelector('#swot').style.display = 'block';
            document.querySelector('#achievement').style.display = 'block';
            document.querySelector('#jumbotron-performa-peserta').style.display = 'block';
            document.querySelector('#jumbotron-performa-peserta-individu').style.display = 'none';
            document.querySelector('#stranger').style.display = 'none';
            document.querySelector('#tabel-peserta').style.display = 'block';
            document.querySelector('#halaman-kesalahan').style.display = 'block';
            document.querySelector('#tombol-tambah-kesalahan').setAttribute('style','display:block !important;');
            document.querySelector('#tombol-tambah-peserta').setAttribute('style','display:block !important;');
            document.querySelector('#tombol-tambah-tugas').setAttribute('style','display:block !important;');
        } else if(username == "Admin Kantor" && user.email == 'useradminkantor@galaxy.id'){
            myFunction(x);
            x.addListener(myFunction);
            function myFunction(x){
            if (x.matches) { // If media query matches
                    document.querySelector('#halaman-tugas').style.display = 'block';
            } else {
                    document.querySelector('#halaman-tugas').style.display = 'grid';
            }
        }
            console.log("YES")
            for(let x = 0; x<editPeserta.length;x++){
            editPeserta[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<hapusPeserta.length;x++){
            hapusPeserta[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<editTugas.length;x++){
            editTugas[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<hapusTugas.length;x++){
            hapusTugas[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<copyTugasSelesai.length;x++){
            copyTugasSelesai[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<hapusTugasSelesai.length;x++){
            hapusTugasSelesai[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<editKesalahan.length;x++){
            editKesalahan[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<hapusKesalahan.length;x++){
            hapusKesalahan[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<peserta.length;x++){
            peserta[x].style.display = 'table-row';
            }
            for(let x = 0; x<tugas.length;x++){
            tugas[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<tugasSelesai.length;x++){
            tugasSelesai[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<kesalahan.length;x++){
            kesalahan[x].setAttribute('style','display:block !important;');
            }
            for(let x = 0; x<bodyEmail.length;x++){
            bodyEmail[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<emailTable.length;x++){
            emailTable[x].setAttribute('style','display:none !important;');
            }
            document.querySelector('#th-email').style.display = 'none';
            document.querySelector('#home').style.display = 'none';
            document.querySelector('#swot').style.display = 'none';
            document.querySelector('#achievement').style.display = 'none';
            document.querySelector('#jumbotron-performa-peserta').style.display = 'block';
            document.querySelector('#jumbotron-performa-peserta-individu').style.display = 'none';
            document.querySelector('#stranger').style.display = 'none';
            document.querySelector('#tabel-peserta').style.display = 'block';
            document.querySelector('#halaman-kesalahan').style.display = 'block';
            document.querySelector('#tombol-tambah-kesalahan').setAttribute('style','display:none !important;');
            document.querySelector('#tombol-tambah-peserta').setAttribute('style','display:none !important;');
            document.querySelector('#tombol-tambah-tugas').setAttribute('style','display:block !important;');
        } else if(daftarKaryawan.includes(username.toLowerCase().replace(" ", "-")) && daftarEmailKaryawan.includes(user.email)){
            myFunction(x);
            x.addListener(myFunction);
            function myFunction(x){
            if (x.matches) { // If media query matches
                    document.querySelector('#halaman-tugas').style.display = 'block';
            } else {
                    document.querySelector('#halaman-tugas').style.display = 'grid';
            }
        }
            for(let x = 0; x<editPeserta.length;x++){
            editPeserta[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<hapusPeserta.length;x++){
            hapusPeserta[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<editTugas.length;x++){
            editTugas[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<hapusTugas.length;x++){
            hapusTugas[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<copyTugasSelesai.length;x++){
            copyTugasSelesai[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<hapusTugasSelesai.length;x++){
            hapusTugasSelesai[x].setAttribute('style','display:none !important;');
            }            
            for(let x = 0; x<peserta.length;x++){
                if(peserta[x].classList.contains(username.toLowerCase().replace(" ", "-"))){
                    peserta[x].style.display = 'table-row';
                } else {
                    peserta[x].style.display = 'none';
                }
            }
            for(let x = 0; x<tugas.length;x++){
                if(tugas[x].classList.contains('tugasseseorang' + username.toLowerCase().replace(" ", "-"))){
                    tugas[x].setAttribute('style','display:block !important;');
                } else {
                    tugas[x].setAttribute('style','display:none !important;');
                }
            }
            for(let x = 0; x<tugasSelesai.length;x++){
                if(tugasSelesai[x].classList.contains('tugasseseorangselesai' + username.toLowerCase().replace(" ", "-"))){
                    tugasSelesai[x].setAttribute('style','display:block !important;');
                } else {
                    tugasSelesai[x].setAttribute('style','display:none !important;');
                }
            }
            for(let x = 0; x<kesalahan.length;x++){
                if(kesalahan[x].classList.contains('kesalahanseseorang' + username.toLowerCase().replace(" ", "-"))){
                    kesalahan[x].setAttribute('style','display:block !important;');
                } else {
                    kesalahan[x].setAttribute('style','display:none !important;');
                }
            }
            for(let x = 0; x<bodyEmail.length;x++){
            bodyEmail[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<emailTable.length;x++){
            emailTable[x].setAttribute('style','display:none !important;');
            }
            document.querySelector('#home').style.display = 'none';
            document.querySelector('#swot').style.display = 'none';
            document.querySelector('#achievement').style.display = 'none';
            document.querySelector('#jumbotron-performa-peserta').style.display = 'none';
            document.querySelector('#jumbotron-performa-peserta-individu').style.display = 'block';
            document.querySelector('#stranger').style.display = 'none';
            document.querySelector('#tabel-peserta').style.display = 'none';
            document.querySelector('#halaman-kesalahan').style.display = 'block';
            document.querySelector('#tombol-tambah-kesalahan').setAttribute('style','display:none !important;');
            document.querySelector('#tombol-tambah-peserta').setAttribute('style','display:none !important;');
            document.querySelector('#tombol-tambah-tugas').setAttribute('style','display:none !important;');
        } else {
            document.querySelector('#stranger').style.display = 'block';
            document.querySelector('#stranger').innerHTML = `
            <div id="judul-peringatan">Maaf!</div>
            <div id="keterangan-peringatan">Sepertinya data anda tidak terdaftar dalam sistem!</div>
            `;
            for(let x = 0; x<editPeserta.length;x++){
            editPeserta[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<hapusPeserta.length;x++){
            hapusPeserta[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<editTugas.length;x++){
            editTugas[x].setAttribute('style','display:none !important;');
            }
            for(let x = 0; x<hapusTugas.length;x++){
            hapusTugas[x].setAttribute('style','display:none !important;');
            }
            document.querySelector('#home').style.display = 'none';
            document.querySelector('#swot').style.display = 'none';
            document.querySelector('#achievement').style.display = 'none';
            document.querySelector('#jumbotron-performa-peserta').style.display = 'none';
            document.querySelector('#jumbotron-performa-peserta-individu').style.display = 'none';
            document.querySelector('#tabel-peserta').style.display = 'none';
            document.querySelector('#halaman-tugas').style.display = 'none';
            document.querySelector('#halaman-kesalahan').style.display = 'none';
            document.querySelector('#tombol-tambah-kesalahan').setAttribute('style','display:none !important;');
            document.querySelector('#tombol-tambah-peserta').setAttribute('style','display:none !important;');
            document.querySelector('#tombol-tambah-tugas').setAttribute('style','display:none !important;');
        } 
    
    document.querySelector('#pengguna-akun').innerHTML = username;
    document.querySelector('#email-akun').innerHTML = user.email;
    document.querySelector('#tombol-burger').style.visibility = 'visible';
    itemMasuk.forEach(item => item.style.display = 'block');
    itemKeluar.forEach(item => item.style.display = 'none');
})

    const reset = document.querySelector('#reset-password-akun');
    const formResetPassword = document.querySelector('#form-reset-password');
    const formHapusAkun = document.querySelector('#form-hapus-akun')
    reset.addEventListener('click', function(e) {
        e.preventDefault();
    formResetPassword.style.display = 'block';
    formHapusAkun.style.display = 'none';
})
    formResetPassword.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let passwordLama = document.querySelector('#password-lama').value;
        let konfirmasiPasswordLama = document.querySelector('#konfirmasi-password-lama').value;
        let passwordBaru = document.querySelector('#password-baru').value;
        if(passwordLama == konfirmasiPasswordLama){
        let user = auth.currentUser;
        console.log(user);
        let credential = firebase.auth.EmailAuthProvider.credential(user.email, passwordLama);
        user.reauthenticateWithCredential(credential).then(function (){
            let konfirmasi = confirm('Apa anda yakin ingin mereset ulang password akun ini?');
            if(konfirmasi == true){
            user.updatePassword(passwordBaru).then(function (){
                $('#modalpengaturanakun').modal('hide');
                alert('Password anda berhasil diubah!');
                formResetPassword.style.display = 'none';
            })
            }
        })
        } else if(passwordLama != konfirmasiPasswordLama){
            alert('Kolom yang anda isi pada password lama dan konfirmasi password lama tidak sama!');
        }
        
    })


    const hapus = document.querySelector('#hapus-akun');
    hapus.addEventListener('click', function(e) {
        e.preventDefault();
        formResetPassword.style.display = 'none';
        formHapusAkun.style.display = 'block';
    })
        formHapusAkun.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            let konfirmasiPassword = document.querySelector('#konfirmasi-password').value;
            let user = auth.currentUser;
            let credential = firebase.auth.EmailAuthProvider.credential(user.email, konfirmasiPassword);
            user.reauthenticateWithCredential(credential).then(function (){
            let konfirmasi = confirm('Apa anda yakin ingin menghapus akun ini?');
            db.collection('pengguna').doc(user.uid).delete();
            if(konfirmasi == true){
                user.delete().then(function (){
                    $('#modalpengaturanakun').modal('hide');
                    alert('Akun anda berhasil dihapus!');
                    formHapusAkun.style.display = 'none';
                    })
            }
                })
            
        })
    


  } else {
    document.querySelector('#stranger').style.display = 'none';
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#swot').style.display = 'none';
    document.querySelector('#achievement').style.display = 'none';
    document.querySelector('#jumbotron-performa-peserta').style.display = 'none';
    document.querySelector('#jumbotron-performa-peserta-individu').style.display = 'none';
    document.querySelector('#tabel-peserta').style.display = 'none';
    document.querySelector('#halaman-tugas').style.display = 'none';
    document.querySelector('#halaman-kesalahan').style.display = 'none';
    document.querySelector('#tombol-tambah-kesalahan').setAttribute('style','display:none !important;');
    document.querySelector('#tombol-tambah-peserta').setAttribute('style','display:none !important;');
    document.querySelector('#tombol-tambah-tugas').setAttribute('style','display:none !important;');
    document.querySelector('#pengguna-akun').innerHTML = '';
    document.querySelector('#email-akun').innerHTML = '';
    document.querySelector('#tombol-burger').style.visibility = 'hidden';
    itemMasuk.forEach(item => item.style.display = 'none');
    itemKeluar.forEach(item => item.style.display = 'block');
    document.querySelector('#form-masuk').setAttribute('style','display:block !important;');
  } 
};

function renderUpdatePeserta(doc){
    let nama = doc.data().nama;
    let libur = doc.data().libur;
    let lokasi = doc.data().lokasi;
    let opsiTugas = document.createElement('option');
    let opsiTugasKedua = document.createElement('option');
    opsiTugas.classList.add('opsi-target-peserta' + doc.id, 'pemilihan-tugas-peserta');
    opsiTugas.innerHTML = nama;
    opsiTugasKedua.classList.add('opsi-target-peserta-kedua' + doc.id, 'pemilihan-tugas-peserta-kedua');
    opsiTugasKedua.innerHTML = nama;
    document.querySelector('#nama-table' + doc.id).innerText = nama;
    document.querySelector('#libur-table' + doc.id).innerText = libur;
    document.querySelector('#lokasi-table' + doc.id).innerText = lokasi;
    document.querySelector('#nama' + doc.id).innerText = nama.toUpperCase();
    document.querySelector('#libur' + doc.id).innerText = libur;
    document.querySelector('#lokasi' + doc.id).innerText = lokasi;
    document.querySelector('#peserta' + doc.id).innerText = nama + ' ';

    let hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    let hariIni = new Date();
    let hariLibur = hariIni.getDay();
    let penentuanLibur = hari[hariLibur];
    if(penentuanLibur == libur){
        document.querySelector('#status-td-peserta' + doc.id).innerText = "Non-Aktif";
        document.querySelector('#status-td-peserta' + doc.id).style.color = "#e61c33";
        document.querySelector('#status-peserta' + doc.id).innerText = "Non-Aktif";
        document.querySelector('#status-peserta' + doc.id).style.color = "#e61c33";
    } else {
        document.querySelector('#status-td-peserta' + doc.id).innerText = "Aktif";
        document.querySelector('#status-td-peserta' + doc.id).style.color = "#13eb5e";
        document.querySelector('#status-peserta' + doc.id).innerText = "Aktif";
        document.querySelector('#status-peserta' + doc.id).style.color = "#13eb5e";
        }

    let status = document.querySelector('#status-peserta' + doc.id).innerText;
    let opsi = document.querySelector('.opsi-target-peserta' + doc.id);
    let opsiKedua = document.querySelector('.opsi-target-peserta-kedua' + doc.id);
        switch(status){
        case "Aktif":
        if(opsi){
            return false;
        } else{
            document.querySelector('#target-peserta').appendChild(opsiTugas);
        }
        break;
        case "Non-Aktif":
        document.querySelector('#target-peserta').removeChild(opsi);
    }

        if(opsiKedua){
            return false;
        } else{
            document.querySelector('#target-peserta-kedua').appendChild(opsiTugasKedua);
        }


}


function renderUpdateSwot(doc){
    let analisis = doc.data().analisis;
    let kontenAnalisis = doc.data().kontenAnalisis;
    document.querySelector('#analisis-swot-table' + doc.id).innerText = analisis;
    document.querySelector('#konten-analisis-table' + doc.id).innerText = kontenAnalisis;
    document.querySelector('#analisis-swot-body' + doc.id).innerText = analisis;
    document.querySelector('#konten-analisis-body' + doc.id).innerText = kontenAnalisis;
}


const tugasPeserta = document.querySelector("#list-tugas-peserta");
const modalTugasPeserta = document.querySelector("#modal-tambah-tugas");
const tugasPesertaSelesai = document.querySelector('#list-tugas-peserta-selesai');
const modalTugasSelesai = document.querySelector('#modal-tugas-selesai');

function renderTugas(doc){
    let div = document.createElement('div');
    let tugas = document.createElement('div');
    div.setAttribute('data-id', doc.id);
    let namaPeserta = doc.data().namaPeserta;
    div.classList.add('dokumentasi-tugas-peserta' + doc.id, 'tugasseseorang', 'tugasseseorang' + namaPeserta.toLowerCase().replace(" ", "-"));
    let kontenTugas = doc.data().kontenTugas;
    let perMinggu = doc.data().perMinggu;
    let perHari = doc.data().perHari;
    let perJam = doc.data().perJam;
    let perMenit = doc.data().perMenit;
    let waktuRilis = doc.data().waktuRilis;
    let tanggal = new Date(waktuRilis);
    let hari = String(tanggal.getDate()).padStart(2, '0');
    let bulan = String(tanggal.getMonth() + 1).padStart(2, '0');
    let tahun = tanggal.getFullYear();
    let tanggalPeluncuran = hari + '/' + bulan + '/' + tahun;
    let sortir = tanggalPeluncuran.split('/');
    let sortirTanggal = sortir[2] + sortir[1] + sortir[0]
    div.setAttribute('data-date', sortirTanggal);
    let waktuDeadline = tanggal.setTime(tanggal.getTime() + ((perMinggu*7*24*60*60*1000) + (perHari*24*60*60*1000) + (perJam*60*60*1000) + (perMenit*60*1000)))
    let waktuPenyelesaian = new Date(waktuDeadline);
    let dd = String(waktuPenyelesaian.getDate()).padStart(2, '0');
    let mm = String(waktuPenyelesaian.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = waktuPenyelesaian.getFullYear();
    let hh = ('0' + waktuPenyelesaian.getHours()).slice(-2);
    let ms = ('0' + waktuPenyelesaian.getMinutes()).slice(-2);
    tanggalDeadline = dd + '/' + mm + '/' + yyyy + ', ' + hh + ':' + ms;
    let tanggalLuncur = doc.data().tanggalLuncur;
    div.innerHTML = `<div class="tugas" data-toggle="modal" data-target="#modaltugas${doc.id}" id="tugas${doc.id}">Tugas ${tanggalLuncur}, CC : ${namaPeserta}</div>`
    tugas.innerHTML = `
<div class="modal fade" id="modaltugas${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Tugas ${tanggalLuncur}, CC : ${namaPeserta} </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div id="data-tugas">
        <div id="info-tugas">
        <div>CC</div>
        <div>:</div>
        <div style="font-weight:bold;" id="nama-peserta-tugas${doc.id}">${namaPeserta.toUpperCase()}</div>
        <div>Waktu Peluncuran</div>
        <div>:</div>        
        <div style="font-weight:bold;">${tanggalLuncur}</div>
        <div>Waktu Deadline</div>
        <div>:</div>        
        <div style="font-weight:bold;" id="batas-waktu${doc.id}">${tanggalDeadline} <span id="peringatan-deadline${doc.id}" class="badge badge-danger"></span></div>
        <div>Status</div>
        <div>:</div> 
        <div id="status-tugas${doc.id}" style="font-weight:bold;color:#c72424;">PENDING</div>
        <div>Konten Tugas</div>
        <div>:</div> 
        <div id="update-konten-tugas${doc.id}">${kontenTugas}</div>
        </div>
<form id="form-bukti-penyelesaian${doc.id}">
        <div class="form-group">
            <label>Bukti Penyelesaian <small>(Note : Tidak wajib untuk diisi)</small></label>
            <textarea oninput="auto_grow(this)" class="form-control" id="bukti-penyelesaian${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)"></textarea>
        </div>
</form>
        <div id="selesai${doc.id}" class="btn btn-success selesai">Selesaikan Tugas</div>
        <div id="edit${doc.id}" class="btn btn-warning edit edit-tugas">Edit Tugas Karyawan</div>
        <div id="hapus${doc.id}" class="btn btn-danger hapus hapus-tugas">Hapus Tugas Karyawan</div>
      </div>
              <form id="modal-tugas${doc.id}" class="modal-tugas">
                <div class="form-group">
                  <label>Konten Tugas</label>
                <textarea oninput="auto_grow(this)" class="form-control" id="konten-tugas${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenTugas.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>
          <div class="form-group">
            <label style="display: block;text-align:center;">Waktu Pengerjaan</label>
            <div class="form-row align-items-center">
                <div class="col-sm-3 my-1">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Minggu</div>
                    </div>
                    <input type="number" id="per-minggu${doc.id}" autocomplete="off" value="${perMinggu}" max="53" min="0" class="form-control your_class">
                  </div>
                </div>
                <div class="col-sm-3 my-1">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Hari</div>
                    </div>
                    <input type="number" id="per-hari${doc.id}" autocomplete="off" value="${perHari}" max="366" min="0" class="form-control your_class">
                  </div>
                </div>
                <div class="col-sm-3 my-1">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Jam</div>
                    </div>
                    <input type="number" id="per-jam${doc.id}" autocomplete="off" value="${perJam}" max="24" min="0" class="form-control your_class">
                  </div>
                </div>
                <div class="col-sm-3 my-1">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Menit</div>
                    </div>
                    <input type="number" id="per-menit${doc.id}" autocomplete="off" value="${perMenit}" max="60" min="0" class="form-control your_class">
                  </div>
                </div>
              </div>
          </div>
                <div class="modal-footer">
                      <button class="btn btn-danger" data-dismiss="modal">Tutup</button>
                      <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
            </div>
          </div>
       </div>
     </div>
    `

    tugasPeserta.appendChild(div);
    modalTugasPeserta.appendChild(tugas);

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus tugas ini?');
        if(konfirmasi == true){
        let id = document.querySelector('.dokumentasi-tugas-peserta' + doc.id).getAttribute('data-id');
        db.collection('tugas').doc(id).delete();
        $('#modaltugas' + doc.id).modal('hide');
        }
    })

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-tugas' + doc.id);
        formEdit.style.display = "block";      
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            let kontenTugasUpdate = document.querySelector('#konten-tugas' + doc.id).value.replace(/\n\r?/g, '<br/>');
            let perMingguUpdate = document.querySelector('#per-minggu' + doc.id).value;
            let perHariUpdate = document.querySelector('#per-hari' + doc.id).value;
            let perJamUpdate = document.querySelector('#per-jam' + doc.id).value;
            let perMenitUpdate = document.querySelector('#per-menit' + doc.id).value;
            if(perMingguUpdate == "" && perHariUpdate == "" && perJamUpdate == "" && perMenitUpdate == ""){
        alert("Pastikan Mengisi Kolom Waktu Pengerjaan untuk Melanjuti Proses Mengedit Tugas");
           } else {
            db.collection('tugas').doc(doc.id).update({
                kontenTugas : kontenTugasUpdate,
                perMinggu : perMingguUpdate,
                perHari : perHariUpdate,
                perJam : perJamUpdate,
                perMenit : perMenitUpdate
            }).then(() =>{
                formEdit.style.display = "none";
            })
           }
        })
    })



    let selesai = document.querySelector('#selesai' + doc.id);
    selesai.addEventListener('click', function (e) {
        e.stopPropagation();
        let buktiPenyelesaian = document.querySelector('#bukti-penyelesaian' + doc.id).value.replace(/\n\r?/g, '<br/>');
        let tanggalSekarang = new Date();
        db.collection('tugas').doc(doc.id).get().then(doc =>{
        let kontenTugasUpdate = doc.data().kontenTugas;
        let perMingguUpdate = doc.data().perMinggu;
        let perHariUpdate = doc.data().perHari;
        let perJamUpdate = doc.data().perJam;
        let perMenitUpdate = doc.data().perMenit;
        console.log(kontenTugasUpdate)
        let tanggalUpdate = new Date(waktuRilis);
        let waktuDeadlineUpdate = tanggalUpdate.setTime(tanggalUpdate.getTime() + ((perMingguUpdate*7*24*60*60*1000) + (perHariUpdate*24*60*60*1000) + (perJamUpdate*60*60*1000) + (perMenitUpdate*60*1000)))
        let waktuSekarang = tanggalSekarang.getTime();
    if(waktuSekarang > waktuDeadlineUpdate){
        let konfirmasiTerlambat = confirm('Sepertinya anda terlambat untuk menyelesaikan tugas berikut, tugas masih bisa diselesaikan tetapi tugas berikut akan ditandai akan keterlambatan penyelesaian, lanjutkan proses?');
        if(konfirmasiTerlambat == true){
        let tanggal = new Date();
        let waktuPenyerahan = tanggal.getTime();
        if(buktiPenyelesaian == ""){
            buktiPenyelesaian = "Tidak Ada";
        }
        let terlambat = `<span style="color:#e61c33;">(Terlambat)</span>`;
        db.collection('tugasSelesai').add({
            namaPeserta : namaPeserta,
            kontenTugas : kontenTugasUpdate,
            perMinggu : perMingguUpdate,
            perHari : perHariUpdate,
            perJam : perJamUpdate,
            perMenit : perMenitUpdate,
            waktuRilis : waktuRilis,
            tanggalLuncur : tanggalLuncur,
            waktuPenyerahan : waktuPenyerahan,
            buktiPenyelesaian : buktiPenyelesaian,
            terlambat : terlambat
        }).then(() => {
            document.querySelector('#status-tugas' + doc.id).style.color = "#13eb5e";
            document.querySelector('#status-tugas' + doc.id).innerText = "COMPLETED";
            alert("Tugas berhasil diselesaikan!")
            $('#modaltugas' + doc.id).modal('hide');
            let id = document.querySelector('.dokumentasi-tugas-peserta' + doc.id).getAttribute('data-id');
            db.collection('tugas').doc(id).delete();
      })
        }
    } else {
        let konfirmasi = confirm('Anda yakin ingin menyelesaikan tugas ini?');
        if(konfirmasi == true){
        let tanggal = new Date();
        let waktuPenyerahan = tanggal.getTime();
        if(buktiPenyelesaian == ""){
            buktiPenyelesaian = "Tidak Ada";
        }
        db.collection('tugasSelesai').add({
            namaPeserta : namaPeserta,
            kontenTugas : kontenTugas,
            perMinggu : perMinggu,
            perHari : perHari,
            perJam : perJam,
            perMenit : perMenit,
            waktuRilis : waktuRilis,
            tanggalLuncur : tanggalLuncur,
            waktuPenyerahan : waktuPenyerahan,
            buktiPenyelesaian : buktiPenyelesaian
        }).then(() => {
            document.querySelector('#status-tugas' + doc.id).style.color = "#13eb5e";
            document.querySelector('#status-tugas' + doc.id).innerText = "COMPLETED";
            alert("Tugas berhasil diselesaikan!")
            $('#modaltugas' + doc.id).modal('hide');
            let id = document.querySelector('.dokumentasi-tugas-peserta' + doc.id).getAttribute('data-id');
            db.collection('tugas').doc(id).delete();
      })
     }
   }
   })
 })


    $(document).ready(function() {
    db.collection('tugas').onSnapshot(snapshot =>{
    let items = $('#list-tugas-peserta > .tugasseseorang').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
    })
    let daftarTugas = $('#list-tugas-peserta');
    $.each(items, function(i, div) {
    daftarTugas.append(div);
  })
  })
})
}


function renderTugasSelesai(doc){
    let div = document.createElement('div');
    let tugas = document.createElement('div');
    div.setAttribute('data-id', doc.id);
    let namaPeserta = doc.data().namaPeserta;
    div.classList.add('dokumentasi-tugas-peserta-selesai' + doc.id, 'tugasseseorangselesai', 'tugasseseorangselesai' + namaPeserta.toLowerCase().replace(" ", "-"));
    let kontenTugas = doc.data().kontenTugas;
    let perMinggu = doc.data().perMinggu;
    let perHari = doc.data().perHari;
    let perJam = doc.data().perJam;
    let perMenit = doc.data().perMenit;
    let waktuRilis = doc.data().waktuRilis;
    let tanggal = new Date(waktuRilis);
    let hari = String(tanggal.getDate()).padStart(2, '0');
    let bulan = String(tanggal.getMonth() + 1).padStart(2, '0');
    let tahun = tanggal.getFullYear();
    let tanggalPeluncuran = hari + '/' + bulan + '/' + tahun;
    let sortir = tanggalPeluncuran.split('/');
    let sortirTanggal = sortir[2] + sortir[1] + sortir[0]
    div.setAttribute('data-date', sortirTanggal);
    let tanggalLuncur = doc.data().tanggalLuncur;
    let waktuPenyerahan = doc.data().waktuPenyerahan;
    let buktiPenyelesaian = doc.data().buktiPenyelesaian;
    let terlambat = doc.data().terlambat;
    let selisihWaktu = Number(waktuPenyerahan - waktuRilis);
    let performaTugas;
    if(selisihWaktu < 60000){
        let perhitunganDetik = Math.floor(selisihWaktu/1000) + ' Detik';
        performaTugas = perhitunganDetik;
    } else if(selisihWaktu > 60000 || selisihWaktu == 60000){
        let perhitunganMenit = Math.floor(selisihWaktu/60000) + ' Menit ';
        let perhitunganDetik = Math.floor((selisihWaktu%60000)/1000) + ' Detik'
        performaTugas = perhitunganMenit + perhitunganDetik;
    } else if(selisihWaktu > 3600000 || selisihWaktu == 3600000){
        let perhitunganJam = Math.floor(selisihWaktu/3600000) + ' Jam ';
        let perhitunganMenit = Math.floor((selisihWaktu%(3600000))/60000) + ' Menit ';
        let perhitunganDetik = Math.floor((selisihWaktu%(60000))/1000) + ' Detik';
        performaTugas = perhitunganJam + perhitunganMenit + perhitunganDetik;
    } else if(selisihWaktu > 86400000 || selisihWaktu == 86400000){
        let perhitunganHari = Math.floor(selisihWaktu/86400000) + ' Hari';
        let perhitunganJam = Math.floor((selisihWaktu%(86400000))/3600000) + ' Jam ';
        let perhitunganMenit = Math.floor((selisihWaktu%(3600000))/60000) + ' Menit ';
        let perhitunganDetik = Math.floor((selisihWaktu%(60000))/1000) + ' Detik';
        performaTugas = perhitunganHari + perhitunganJam + perhitunganMenit + perhitunganDetik;
    } else if(selisihWaktu > 604800000 || selisihWaktu == 604800000){
        let perhitunganBulan = Math.floor(selisihWaktu/604800000) + ' Minggu ';
        let perhitunganHari = Math.floor((selisihWaktu%(604800000))/86400000) + ' Hari';
        let perhitunganJam = Math.floor((selisihWaktu%(86400000))/3600000) + ' Jam ';
        let perhitunganMenit = Math.floor((selisihWaktu%(3600000))/60000) + ' Menit ';
        let perhitunganDetik = Math.floor((selisihWaktu%(60000))/1000) + ' Detik';
        performaTugas = perhitunganBulan + perhitunganHari + perhitunganJam + perhitunganMenit + perhitunganDetik;
    }
//    console.log(namaPeserta);
//    console.log(kontenTugas);
//    console.log(perMinggu);
//    console.log(perHari);
//    console.log(perJam);
//    console.log(perMenit);
//    console.log(waktuRilis);
//    console.log(tanggalLuncur);
//    console.log(waktuPenyerahan);
    let waktuPenyerahanKedua = new Date(waktuPenyerahan);
    let tanggalRilis = new Date(waktuRilis);
    let waktuDeadline = tanggalRilis.setTime(tanggalRilis.getTime() + ((perMinggu*7*24*60*60*1000) + (perHari*24*60*60*1000) + (perJam*60*60*1000) + (perMenit*60*1000)))
    let waktuPenyelesaian = new Date(waktuDeadline);
    let ddd = String(waktuPenyelesaian.getDate()).padStart(2, '0');
    let mmd = String(waktuPenyelesaian.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyyd = waktuPenyelesaian.getFullYear();
    let hhd = ('0' + waktuPenyelesaian.getHours()).slice(-2);
    let msd = ('0' + waktuPenyelesaian.getMinutes()).slice(-2);
    let dds = String(waktuPenyerahanKedua.getDate()).padStart(2, '0');
    let mms = String(waktuPenyerahanKedua.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyys = waktuPenyerahanKedua.getFullYear();
    let hhs = ('0' + waktuPenyerahanKedua.getHours()).slice(-2);
    let mss = ('0' + waktuPenyerahanKedua.getMinutes()).slice(-2);
    tanggalDeadline = ddd + '/' + mmd + '/' + yyyyd + ', ' + hhd + ':' + msd;
    tanggalPenyerahan = dds + '/' + mms + '/' + yyyys + ', ' + hhs + ':' + mss;
    if(terlambat == undefined){
        terlambat = "";
    } else {
        div.classList.add('terlambat'+ namaPeserta.toLowerCase().replace(" ", "-"));
    }

    div.innerHTML = `<div class="tugas" data-toggle="modal" data-target="#modaltugasselesai${doc.id}" id="tugas${doc.id}">Tugas ${tanggalLuncur}, CC : ${namaPeserta} ${terlambat}</div>`
    tugas.innerHTML = `
<div class="modal fade" id="modaltugasselesai${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Tugas ${tanggalLuncur}, CC : ${namaPeserta} ${terlambat}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div id="data-tugas">
        <div id="info-tugas">
        <div>CC</div>
        <div>:</div>
        <div style="font-weight:bold;" id="nama-peserta-tugas${doc.id}">${namaPeserta.toUpperCase()}</div>
        <div>Waktu Peluncuran</div>
        <div>:</div>        
        <div style="font-weight:bold;">${tanggalLuncur}</div>
        <div>Waktu Penyerahan</div>
        <div>:</div>        
        <div id="waktu-penyerahan${doc.id}" style="font-weight:bold;">${tanggalPenyerahan} ${terlambat}</div>
        <div>Waktu Penyelesaian Tugas</div>
        <div>:</div>        
        <div id="waktu-penyelesaian-tugas${doc.id}" style="font-weight:bold;">${performaTugas} <span id="waktu-penyelesaian-${doc.id}"style="display:none;font-weight:normal;" class="waktu-penyelesaian-${namaPeserta.toLowerCase().replace(" ", "-")}">${selisihWaktu}</span></div>
        <div>Waktu Deadline</div>
        <div>:</div>        
        <div style="font-weight:bold;" id="batas-waktu${doc.id}">${tanggalDeadline} <span id="peringatan-deadline${doc.id}" class="badge badge-danger"></span></div>
        <div>Status</div>
        <div>:</div> 
        <div id="status-tugas${doc.id}" style="font-weight:bold;color:#13eb5e;">COMPLETED</div>
        <div>Konten Tugas</div>
        <div>:</div> 
        <div id="update-konten-tugas${doc.id}">${kontenTugas}</div>
        <div>Bukti Penyelesaian</div>
        <div>:</div> 
        <div id="bukti-penyelesaian-tugas${doc.id}">${buktiPenyelesaian}</div>
        </div>
        <div id="copytugasselesai${doc.id}" class="btn btn-success copy copy-tugas-selesai">Copy Bukti Penyelesaian</div>
        <div id="hapustugasselesai${doc.id}" class="btn btn-danger hapus hapus-tugas-selesai">Hapus Tugas(Selesai) Karyawan</div>
      </div>
              <form id="modal-tugas${doc.id}" class="modal-tugas">
                <div class="form-group">
                  <label>Konten Tugas</label>
                <textarea oninput="auto_grow(this)" class="form-control" id="konten-tugas${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenTugas.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>
          <div class="form-group">
            <label style="display: block;text-align:center;">Waktu Pengerjaan</label>
            <div class="form-row align-items-center">
                <div class="col-sm-3 my-1">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Minggu</div>
                    </div>
                    <input type="number" id="per-minggu${doc.id}" autocomplete="off" value="${perMinggu}" max="53" min="0" class="form-control your_class">
                  </div>
                </div>
                <div class="col-sm-3 my-1">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Hari</div>
                    </div>
                    <input type="number" id="per-hari${doc.id}" autocomplete="off" value="${perHari}" max="366" min="0" class="form-control your_class">
                  </div>
                </div>
                <div class="col-sm-3 my-1">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Jam</div>
                    </div>
                    <input type="number" id="per-jam${doc.id}" autocomplete="off" value="${perJam}" max="24" min="0" class="form-control your_class">
                  </div>
                </div>
                <div class="col-sm-3 my-1">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Menit</div>
                    </div>
                    <input type="number" id="per-menit${doc.id}" autocomplete="off" value="${perMenit}" max="60" min="0" class="form-control your_class">
                  </div>
                </div>
              </div>
          </div>
                <div class="modal-footer">
                      <button class="btn btn-danger" data-dismiss="modal">Tutup</button>
                      <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
            </div>
          </div>
       </div>
     </div>
    `

    tugasPesertaSelesai.appendChild(div);
    modalTugasSelesai.appendChild(tugas);


    if(buktiPenyelesaian == "Tidak Ada"){
        document.querySelector("#copytugasselesai" + doc.id).classList.add("disabled");
    } else {
    let copy = document.querySelector("#copytugasselesai" + doc.id);
    copy.addEventListener('click', function (e) {
    var range = document.getSelection().getRangeAt(0);
    range.selectNode(document.querySelector("#bukti-penyelesaian-tugas" + doc.id));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Teks berhasil dicopy!");
    })
}


    let hapus = document.querySelector('#hapustugasselesai' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus tugas ini?');
        if(konfirmasi == true){
        let id = document.querySelector('.dokumentasi-tugas-peserta-selesai' + doc.id).getAttribute('data-id');
        db.collection('tugasSelesai').doc(id).delete();
        document.querySelector('#waktu-penyelesaian-' + doc.id).remove();
        $('#modaltugasselesai' + doc.id).modal('hide');
        }
    })



    $(document).ready(function() {
    db.collection('tugasSelesai').onSnapshot(snapshot =>{
    let items = $('#list-tugas-peserta-selesai > .tugasseseorangselesai').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
    })
    let daftarTugasSelesai = $('#list-tugas-peserta-selesai');
    $.each(items, function(i, div) {
    daftarTugasSelesai.append(div);
  })
  })
})


let performaPeserta = document.querySelectorAll('.waktu-penyelesaian-' + namaPeserta.toLowerCase().replace(" ", "-"));
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
                } else if(perhitunganJam == '0 Jam '){
                                    perhitunganJam = '';
                } else if(perhitunganMenit == '0 Menit '){
                                    perhitunganMenit = '';
                } else if(perhitunganDetik == '0 Detik'){
                                    perhitunganDetik = '';
                }
                rataRataWaktuPenyelesaian = perhitunganMinggu + perhitunganHari + perhitunganJam + perhitunganMenit + perhitunganDetik;
            }

let tampilanPerforma = document.querySelectorAll('.performa-peserta-' + namaPeserta.toLowerCase().replace(" ", "-"));
for(let x = 0;x<tampilanPerforma.length;x++){
    tampilanPerforma[x].innerText = rataRataWaktuPenyelesaian;
}
    let jumlahTugasTerlambat = document.querySelectorAll('.terlambat' + namaPeserta.toLowerCase().replace(" ", "-")).length;
    let jumlahTugasSelesai = document.querySelectorAll('.tugasseseorangselesai' + namaPeserta.toLowerCase().replace(" ", "-")).length;
    if(jumlahTugasTerlambat == 0){
    document.querySelector('#jumlah-tugas-selesai-peserta-' + namaPeserta.toLowerCase().replace(" ", "-")).innerHTML = 'telah menyelesaikan ' + jumlahTugasSelesai + ' tugas';
    document.querySelector('#rata-rata-waktu-penyelesaian-peserta-' + namaPeserta.toLowerCase().replace(" ", "-")).innerHTML = ' dengan rata-rata waktu penyelesaian ' + rataRataWaktuPenyelesaian;
    document.querySelector('#jumlah-tugas-terlambat-selesai-peserta-' + namaPeserta.toLowerCase().replace(" ", "-")).innerHTML = ', tidak pernah terlambat menyelesaikan tugas.';
    } else if(jumlahTugasTerlambat != 0){
    document.querySelector('#jumlah-tugas-selesai-peserta-' + namaPeserta.toLowerCase().replace(" ", "-")).innerHTML = 'telah menyelesaikan ' + jumlahTugasSelesai + ' tugas';
    document.querySelector('#rata-rata-waktu-penyelesaian-peserta-' + namaPeserta.toLowerCase().replace(" ", "-")).innerHTML = ' dengan rata-rata waktu penyelesaian ' + rataRataWaktuPenyelesaian;
    document.querySelector('#jumlah-tugas-terlambat-selesai-peserta-' + namaPeserta.toLowerCase().replace(" ", "-")).innerHTML = ', terlambat menyelesaikan ' + jumlahTugasTerlambat + ' tugas.';
    }
}



function renderUpdateTugas(doc){
    let kontenTugas = doc.data().kontenTugas;
    let perMinggu = doc.data().perMinggu;
    let perHari = doc.data().perHari;
    let perJam = doc.data().perJam;
    let perMenit = doc.data().perMenit;
    let waktuRilis = doc.data().waktuRilis;
    let waktuSekarang = new Date();
    let tanggal = new Date(waktuRilis);
    let hari = String(tanggal.getDate()).padStart(2, '0');
    let bulan = String(tanggal.getMonth() + 1).padStart(2, '0');
    let tahun = tanggal.getFullYear();
    let tanggalPeluncuran = hari + '/' + bulan + '/' + tahun;
    let sortir = tanggalPeluncuran.split('/');
    let sortirTanggal = sortir[2] + sortir[1] + sortir[0]
    let div = document.querySelector('.dokumentasi-tugas-peserta' + doc.id)
    div.setAttribute('data-date', sortirTanggal);
    let waktuDeadline = tanggal.setTime(tanggal.getTime() + ((perMinggu*7*24*60*60*1000) + (perHari*24*60*60*1000) + (perJam*60*60*1000) + (perMenit*60*1000)))
    let waktuPenyelesaian = new Date(waktuDeadline);
    let dd = String(waktuPenyelesaian.getDate()).padStart(2, '0');
    let mm = String(waktuPenyelesaian.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = waktuPenyelesaian.getFullYear();
    let hh = ('0' + waktuPenyelesaian.getHours()).slice(-2);
    let ms = ('0' + waktuPenyelesaian.getMinutes()).slice(-2);
    tanggalDeadline = dd + '/' + mm + '/' + yyyy + ', ' + hh + ':' + ms;
    document.querySelector('#batas-waktu' + doc.id).innerHTML = tanggalDeadline;
    document.querySelector('#update-konten-tugas' + doc.id).innerHTML = kontenTugas;

}

const kesalahanPeserta = document.querySelector("#list-kesalahan-peserta");
const modalKesalahanPeserta = document.querySelector("#modal-tambah-kesalahan");

function renderKesalahan(doc){
    let div = document.createElement('div');
    let kesalahan = document.createElement('div');
    div.setAttribute('data-id', doc.id);
    let nama = doc.data().nama;
    div.classList.add('dokumentasi-kesalahan-peserta' + doc.id, 'kesalahanseseorang', 'kesalahanseseorang' + nama.toLowerCase().replace(" ", "-"));
    let kontenKesalahan = doc.data().kontenKesalahan;
    let tanggal = doc.data().tanggal;
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let mm = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + '/' + mm + '/' + yyyy;
    let sortir = tanggal.split('/');
    let sortirTanggal = sortir[2] + sortir[1] + sortir[0];
    let tampilantanggal = yyyy + '-' + mm + '-' + dd;
    div.setAttribute('data-date', sortirTanggal);
    div.innerHTML = `<div class="kesalahan" data-toggle="modal" data-target="#modalkesalahan${doc.id}" id="kesalahan${doc.id}">Kesalahan <span id="tampilan-tanggal-kesalahan${doc.id}">${tanggal}</span>, ${nama}</div>`
    kesalahan.innerHTML = `
    <div class="modal fade" id="modalkesalahan${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Kesalahan <span id="tampilan-tanggal-kesalahan-header${doc.id}">${tanggal}</span>, ${nama}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
            <div id="data-kesalahan">
            <div id="info-kesalahan">
            <div>Karyawan</div>
            <div>:</div>
            <div style="font-weight:bold;" id="nama-kesalahan-peserta${doc.id}">${nama.toUpperCase()}</div>
            <div>Waktu Kejadian</div>
            <div>:</div>        
            <div style="font-weight:bold;" id="tanggal-kesalahan-peserta${doc.id}">${tanggal}</div>
            <div>Konten Kesalahan</div>
            <div>:</div> 
            <div id="konten-kesalahan-peserta${doc.id}">${kontenKesalahan}</div>
            </div>
            <div id="edit${doc.id}" class="btn btn-warning edit edit-kesalahan">Edit Kesalahan Karyawan</div>
            <div id="hapus${doc.id}" class="btn btn-danger hapus hapus-kesalahan">Hapus Kesalahan Karyawan</div>
          </div>
              <form id="modal-kesalahan${doc.id}" class="modal-kesalahan">
                    <div class="form-group">
                      <label class="col-form-label">Tanggal Kejadian <small>(Note :Tanggal akan otomatis mengikuti tanggal hari ini jika kolom dikosongkan)</small></label>
                      <input type="date" value="${tampilantanggal}" class="form-control" id="tanggal-kesalahan${doc.id}" autocomplete="off">
                    </div>
                  <div class="form-group">
                    <label>Konten Kesalahan Karyawan</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="konten-kesalahan${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenKesalahan.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                  </div>
                    <div class="modal-footer">
                          <button class="btn btn-danger" data-dismiss="modal">Tutup</button>
                          <button type="submit" class="btn btn-primary">Simpan</button>
                    </div>
                </form>
                </div>
              </div>
           </div>
         </div>
    `

    kesalahanPeserta.appendChild(div);
    modalKesalahanPeserta.appendChild(kesalahan);

    let jumlahKesalahan = document.querySelectorAll('.kesalahanseseorang' + nama.toLowerCase().replace(" ", "-")).length;
    document.querySelector('#jumlah-kesalahan-peserta-' + nama.toLowerCase().replace(" ", "-")).innerHTML = 'Memiliki kesalahan dengan jumlah keseluruhan ' + jumlahKesalahan;

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-kesalahan' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            let tanggalUpdate = document.querySelector('#tanggal-kesalahan' + doc.id).value;
            let kontenKesalahanUpdate = document.querySelector('#konten-kesalahan' + doc.id).value;
            if(tanggalUpdate == 0){
            tanggalUpdate = new Date().getTime();
            }
            db.collection('kesalahan').doc(doc.id).update({
                tanggal : tanggalUpdate,
                kontenKesalahan : kontenKesalahanUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                formEdit.style.display = "none";
            })
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus kesalahan ' + nama + ' ini?');
        if(konfirmasi == true){
        let id = document.querySelector('.dokumentasi-kesalahan-peserta' + doc.id).getAttribute('data-id');
        db.collection('kesalahan').doc(id).delete();
        $('#modalkesalahan' + doc.id).modal('hide');
        let jumlahKesalahanBaru = document.querySelectorAll('.kesalahanseseorang' + nama.toLowerCase().replace(" ", "-")).length;
        }
    })

    $(document).ready(function() {
    db.collection('kesalahan').onSnapshot(snapshot =>{
    let items = $('#list-kesalahan-peserta > .kesalahanseseorang').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
    })
    let daftarKesalahan = $('#list-kesalahan-peserta');
    $.each(items, function(i, div) {
    daftarKesalahan.append(div);
  })
  })
})

}

function renderUpdateKesalahan(doc){
    let tanggal = doc.data().tanggal;
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let mm = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + '/' + mm + '/' + yyyy;
    let sortir = tanggal.split('/');
    let sortirTanggal = sortir[2] + sortir[1] + sortir[0];
    let div = document.querySelector('.dokumentasi-kesalahan-peserta' + doc.id);
    div.setAttribute('data-date', sortirTanggal);
    let kontenKesalahan = doc.data().kontenKesalahan;
    document.querySelector('#tampilan-tanggal-kesalahan' + doc.id).innerHTML = tanggal;
    document.querySelector('#tampilan-tanggal-kesalahan-header' + doc.id).innerHTML = tanggal;
    document.querySelector('#tanggal-kesalahan-peserta' + doc.id).innerHTML = tanggal;
    document.querySelector('#konten-kesalahan-peserta' + doc.id).innerHTML = kontenKesalahan;
}


const listPencapaian = document.querySelector('#list-achievement');
const modalPencapaian = document.querySelector('#modal-edit-achievement')

function renderAchievement(doc){
    let tr = document.createElement('tr');
    let achievement = document.createElement('div');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('data-toggle', 'modal');
    tr.setAttribute('data-target', '#modalachievement' + doc.id);
    tr.setAttribute('id','achievement' + doc.id);
    tr.classList.add('dokumentasi-pencapaian' + doc.id, 'pencapaian');
    let kontenPencapaian = doc.data().kontenPencapaian;
    let tanggal = doc.data().tanggal;
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let mm1 = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    let tampilanTanggal = yyyy + '-' + mm1 + '-' + dd;
    let sortirTanggal = tampilanTanggal.split('-');
    tr.setAttribute('data-date', sortirTanggal);
    tr.innerHTML = `
    <td style="font-weight:bold;" id="tanggal-pencapaian-table${doc.id}">${tanggal}</td>
    <td id="konten-pencapaian-table${doc.id}">${kontenPencapaian}</td>
    `
    achievement.innerHTML = `
    <div class="modal fade" id="modalachievement${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Penngaturan Pencapaian</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="data-achievement">
            <div id="info-achievement">
            <div>Tanggal</div>
            <div>:</div>
            <div style="font-weight:bold;" id="tanggal-pencapaian-body${doc.id}">${tanggal}</div>
            <div>Konten Achievement</div>
            <div>:</div> 
            <div id="konten-pencapaian-body${doc.id}">${kontenPencapaian}</div>
            </div>
            <div id="edit${doc.id}" class="btn btn-warning edit editpencapaian">Edit Data Pencapaian</div>
            <div id="hapus${doc.id}" class="btn btn-danger hapus hapuspencapaian">Hapus Data Pencapaian</div>
          </div>
              <form id="modal-achievement${doc.id}" class="modal-achievement">
                    <div class="form-group">
                      <label class="col-form-label">Tanggal Kejadian <small>(Note :Tanggal akan otomatis mengikuti tanggal hari ini jika kolom dikosongkan)</small></label>
                      <input type="date" value="${tampilanTanggal}" class="form-control" id="tanggal-pencapaian${doc.id}" autocomplete="off">
                    </div>
                  <div class="form-group">
                    <label>Konten Kesalahan Karyawan</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="konten-pencapaian${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenPencapaian.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                  </div>
                    <div class="modal-footer">
                          <button class="btn btn-danger" data-dismiss="modal">Tutup</button>
                          <button type="submit" class="btn btn-primary">Simpan</button>
                    </div>
                </form>
                </div>
              </div>
           </div>
         </div>
    `

    listPencapaian.appendChild(tr);
    modalPencapaian.appendChild(achievement);

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-achievement' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            let tanggalUpdate = document.querySelector('#tanggal-pencapaian' + doc.id).value;
            let kontenPencapaianUpdate = document.querySelector('#konten-pencapaian' + doc.id).value;
            if(tanggalUpdate == 0){
            tanggalUpdate = new Date().getTime();
            }
            db.collection('achievement').doc(doc.id).update({
                tanggal : tanggalUpdate,
                kontenPencapaian : kontenPencapaianUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                formEdit.style.display = "none";
            })
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus pencapaian ini?');
        if(konfirmasi == true){
        let id = document.querySelector('.dokumentasi-pencapaian' + doc.id).getAttribute('data-id');
        db.collection('achievement').doc(id).delete();
        $('#modalachievement' + doc.id).modal('hide');
        }
    })

    $(document).ready(function() {
    db.collection('achievement').onSnapshot(snapshot =>{
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
  })
})

}

function renderUpdateAchievement(doc){
    let tanggal = doc.data().tanggal;
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let mm1 = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    let tampilanTanggal = yyyy + '-' + mm1 + '-' + dd;
    let sortirTanggal = tampilanTanggal.split('-');
    let tr = document.querySelector('.dokumentasi-pencapaian' + doc.id)
    tr.setAttribute('data-date', sortirTanggal);
    let kontenPencapaian = doc.data().kontenPencapaian;
    document.querySelector('#tanggal-pencapaian-table' + doc.id).innerHTML = tanggal;
    document.querySelector('#tanggal-pencapaian-body' + doc.id).innerHTML = tanggal;
    document.querySelector('#konten-pencapaian-table' + doc.id).innerHTML = kontenPencapaian;
    document.querySelector('#konten-pencapaian-body' + doc.id).innerHTML = kontenPencapaian;
}



function auto_grow(element){
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

document.querySelector(".your_class").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});


//var tanggal = document.querySelectorAll('.tanggal-table');
//var sum = 0;
//for(let x=0;x<tanggal.length;x++){
//    let ambilTanggal = tanggal[x].textContent.slice(3,5)
//console.log(ambilTanggal)
//    if(ambilTanggal == 08){
//       sum+= Number(document.querySelectorAll('.nominal-table')[x].textContent.replace('Rp ','').slice(0,-3).replace(/,/g,''));
//        }
//    }
//console.log(sum)


