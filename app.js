document.querySelector('#tombol-tangerang').addEventListener('click', (e) =>{
    for(let x = 0; x < document.querySelectorAll('.peserta').length; x++){
        if(document.querySelectorAll('.peserta')[x].classList.contains('peserta-tangerang')){
            document.querySelectorAll('.peserta')[x].style.setProperty('display', 'table', 'important');
        } else {
            document.querySelectorAll('.peserta')[x].style.setProperty('display', 'none', 'important');
        }
    }
})

document.querySelector('#tombol-depok').addEventListener('click', (e) =>{
    for(let x = 0; x < document.querySelectorAll('.peserta').length; x++){
        if(document.querySelectorAll('.peserta')[x].classList.contains('peserta-depok')){
            document.querySelectorAll('.peserta')[x].style.setProperty('display', 'table', 'important');
        } else {
            document.querySelectorAll('.peserta')[x].style.setProperty('display', 'none', 'important');
        }
    }    
})

document.querySelector('#tombol-jaksel').addEventListener('click', (e) =>{
    for(let x = 0; x < document.querySelectorAll('.peserta').length; x++){
        if(document.querySelectorAll('.peserta')[x].classList.contains('peserta-jakarta-selatan')){
            document.querySelectorAll('.peserta')[x].style.setProperty('display', 'table', 'important');
        } else {
            document.querySelectorAll('.peserta')[x].style.setProperty('display', 'none', 'important');
        }
    }
})

document.querySelector('#tombol-jakpus').addEventListener('click', (e) =>{
    for(let x = 0; x < document.querySelectorAll('.peserta').length; x++){
        if(document.querySelectorAll('.peserta')[x].classList.contains('peserta-jakarta-pusat')){
            document.querySelectorAll('.peserta')[x].style.setProperty('display', 'table', 'important');
        } else {
            document.querySelectorAll('.peserta')[x].style.setProperty('display', 'none', 'important');
        }
    }
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

const listPeserta = document.querySelector('#list-peserta');
const modalPeserta = document.querySelector('#modal-edit-peserta');
const listPerformaPeserta = document.querySelector('#list-performa-peserta');

const daftarKaryawan = [];
const daftarEmailKaryawan = [];
function renderPeserta(doc){
    let tr = document.createElement('tr');
    let div = document.createElement('div');
    let peserta = document.createElement('div');
    let lihatPerformaPeserta = document.createElement('div');    
    let nama = doc.data().nama;
    let libur = doc.data().libur;
    let lokasi = doc.data().lokasi;
    let email = doc.data().email;
    let role = doc.data().role;
    daftarEmailKaryawan.push(email);
    daftarKaryawan.push(nama.toLowerCase().replace(/\s/g, "-"));
    let opsiTugas = document.createElement('option');
    let opsiTugasKedua = document.createElement('option');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('data-toggle', 'modal');
    tr.setAttribute('data-target', '#modaleditpeserta' + doc.id);
    tr.setAttribute('id','peserta' + doc.id);
    tr.classList.add('dokumentasi-peserta' + doc.id, nama.toLowerCase().replace(/\s/g, "-"), 'peserta', 'peserta-' + lokasi.toLowerCase().replace(/\s/g, "-"));
    div.setAttribute('data-info', doc.id);
    div.classList.add('dokumentasi-peserta-kedua' + doc.id);
    lihatPerformaPeserta.setAttribute('id', 'lihat-performa-peserta');
    lihatPerformaPeserta.classList.add('btn', 'btn-light', 'd-block');    
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

    div.innerHTML = `<div class="performa-peserta" id="performa-peserta-${nama.toLowerCase().replace(/\s/g, "-")}"><span style="font-weight:bold;" id="peserta${doc.id}"><i class='fas fa-user'></i> ${nama} </span><span id="jumlah-kesalahan-peserta-${nama.toLowerCase().replace(/\s/g, "-")}">sejauh ini tidak memiliki kesalahan atau terlibat dalam masalah</span>, <span id="jumlah-tugas-selesai-peserta-${nama.toLowerCase().replace(/\s/g, "-")}">belum terlibat dalam penugasan tertentu.</span> <span id="rata-rata-waktu-penyelesaian-peserta-${nama.toLowerCase().replace(/\s/g, "-")}"></span><span id="jumlah-tugas-terlambat-selesai-peserta-${nama.toLowerCase().replace(/\s/g, "-")}"></span></div>`

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
        <div class="data-peserta">
        <div class="info-peserta">
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
        <div id="performa-peserta${doc.id}" class="performa-peserta-${nama.toLowerCase().replace(/\s/g, "-")}" style="font-weight:bold;">-</div>
        <div>Status</div>
        <div>:</div> 
        <div id="status-peserta${doc.id}" style="font-weight:bold;"></div> 
        </div>
        <div id="adminKantor${doc.id}" class="edit role-peserta"></div>
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

    lihatPerformaPeserta.innerHTML = `<i class='fas fa-caret-down'></i> Show More`;
    listPeserta.appendChild(tr);
    listPerformaPeserta.appendChild(div);
    modalPeserta.appendChild(peserta);

    if(role == null){
    db.collection('peserta').doc(doc.id).update({
        role : "Member"
    })
    document.querySelector('#adminKantor' + doc.id).innerHTML = 'Tambahkan Role Sebagai Admin Kantor'
    document.querySelector('#adminKantor' + doc.id).classList.add('btn', 'btn-success');
    document.querySelector('#adminKantor' + doc.id).classList.remove('btn-info');   
        } else if(role == "Member"){
    document.querySelector('#adminKantor' + doc.id).innerHTML = 'Tambahkan Role Sebagai Admin Kantor'
    document.querySelector('#adminKantor' + doc.id).classList.add('btn', 'btn-success');
    document.querySelector('#adminKantor' + doc.id).classList.remove('btn-info');
        } else if(role == "Admin Kantor"){
    document.querySelector('#adminKantor' + doc.id).innerHTML = 'Hapus Role Sebagai Admin Kantor'
    document.querySelector('#adminKantor' + doc.id).classList.remove('btn-success');
    document.querySelector('#adminKantor' + doc.id).classList.add('btn','btn-info');        
        }

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
        document.querySelector('#status-td-peserta' + doc.id).innerHTML = "Non-Aktif";
        document.querySelector('#status-td-peserta' + doc.id).style.color = "#e61c33";
        document.querySelector('#status-peserta' + doc.id).innerHTML = "Non-Aktif";
        document.querySelector('#status-peserta' + doc.id).style.color = "#e61c33";
    } else {
        document.querySelector('#status-td-peserta' + doc.id).innerHTML = "Aktif";
        document.querySelector('#status-td-peserta' + doc.id).style.color = "#13eb5e";
        document.querySelector('#status-peserta' + doc.id).innerHTML = "Aktif";
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

let status = document.querySelector('#status-peserta' + doc.id).innerHTML;
if(auth.currentUser.email != email){
    switch(status){
        case "Aktif":
        document.querySelector('#target-peserta').appendChild(opsiTugas);
    }
        document.querySelector('#target-peserta-kedua').appendChild(opsiTugasKedua);
    }

let refreshPerformaPeserta = setTimeout(refreshOnPerformaPeserta,0);


function refreshOnPerformaPeserta(){
    let performaPeserta = document.querySelectorAll('.performa-peserta');    
    if(listPerformaPeserta.childNodes.length > 3){
    for(let x = 0; x<performaPeserta.length; x++){
    if(x > 2){
        performaPeserta[x].style.setProperty('display', 'none')
    }
        }
    if(!document.querySelector('#lihat-performa-peserta')){
    document.querySelector('#list-performa-peserta').parentNode.insertBefore(lihatPerformaPeserta, document.querySelector('#list-performa-peserta').nextSibling);    
    clearInterval(refreshPerformaPeserta);
    for(let x = 0; x<performaPeserta.length; x++){
        if(x > 2){
            if(performaPeserta[x].style.display == 'none'){
            document.querySelector('#lihat-performa-peserta').innerHTML = `<i class='fas fa-caret-down'></i> Show More`                
            } else {
            document.querySelector('#lihat-performa-peserta').innerHTML = `<i class='fas fa-caret-up'></i> Show Less`                
            }
        }
    }    
    } 
    let tombolLihatPerformaPeserta = document.querySelector('#lihat-performa-peserta');
    tombolLihatPerformaPeserta.addEventListener('click', function(e){
        e.stopImmediatePropagation();
        if(e.target.innerHTML.includes('Show More')){
            for(let x = 0; x<performaPeserta.length; x++){
                if(x > 2){
                    performaPeserta[x].style.setProperty('display', 'block')
                    tombolLihatPerformaPeserta.innerHTML = `<i class='fas fa-caret-up'></i> Show Less`                                    
                }
            }
        } else if(e.target.innerHTML.includes('Show Less')){
        for(let x = 0; x<performaPeserta.length; x++){
                if(x > 2){           
                    performaPeserta[x].style.setProperty('display', 'none')
                    tombolLihatPerformaPeserta.innerHTML = `<i class='fas fa-caret-down'></i> Show More`                        
                }
            }
        }        
    })

    }
}

    let adminKantor = document.querySelector('#adminKantor' + doc.id);
    adminKantor.addEventListener('click', function(e){
        e.stopPropagation();
            db.collection('peserta').doc(doc.id).get().then((item) => {              
                if(item.data().role == null || item.data().role == "Member"){
                    db.collection('peserta').doc(doc.id).update({
                        role : "Admin Kantor"
                    }).then(() => {
                    adminKantor.innerHTML = 'Hapus Role Sebagai Admin Kantor'
                    adminKantor.classList.remove('btn-success');
                    adminKantor.classList.add('btn-info');
                    alert('Karyawan ' + nama + ' berhasil diubah role sebagai admin kantor!');                    
                })            
            } else if(item.data().role == "Admin Kantor"){
                    db.collection('peserta').doc(doc.id).update({
                        role : "Member"
                    }).then(() => {
                    adminKantor.innerHTML = 'Tambahkan Role Sebagai Admin Kantor'
                    adminKantor.classList.remove('btn-info');
                    adminKantor.classList.add('btn-success');
                    alert('Karyawan ' + nama + ' berhasil diubah role sebagai member!');                                       
                    })
            } 
        })
    })        

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        let formEdit = document.querySelector('#modal-peserta' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let liburPeserta = document.querySelector('#hari-libur' + doc.id).value;
            let lokasiPeserta = document.querySelector('#lokasi-berjaga' + doc.id).value;
            let overviewCadangan;
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
            db.collection('peserta').doc(doc.id).get().then(function(item) {
                libur = item.data().libur;
                lokasi = item.data().lokasi;
                nama = item.data().nama;
            if(libur == liburPeserta && lokasi == lokasiPeserta){
                alert('Tidak ada perubahan yang terjadi pada kolom kolom berikut');
            } else if(libur != liburPeserta && lokasi != lokasiPeserta){
                overviewCadangan = 'mengubah lokasi dan waktu libur karyawan ' + nama + ' dari ' + lokasi + ' dan hari ' + libur + ' menjadi ' + lokasiPeserta + ' dan hari ' + liburPeserta + '.';
                db.collection('peserta').doc(doc.id).update({
                    libur : liburPeserta,
                    lokasi : lokasiPeserta
                }).then(() => {
                    formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        pengguna : nama,
                        waktuOverview : new Date().getTime(),
                        overview : 'update-user',
                        overviewCadangan : overviewCadangan
                    })
                })
            } else if(libur != liburPeserta){
                overviewCadangan = 'mengubah waktu libur karyawan ' + nama + ' dari hari ' + libur + ' menjadi hari ' + liburPeserta + '.';
                db.collection('peserta').doc(doc.id).update({
                    libur : liburPeserta
                }).then(() => {
                    formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        pengguna : nama,
                        waktuOverview : new Date().getTime(),
                        overview : 'update-user',
                        overviewCadangan : overviewCadangan
                    })
                })                
            } else if(lokasi != lokasiPeserta){
                overviewCadangan = 'mengubah lokasi karyawan ' + nama + ' dari ' + lokasi + ' menjadi ' + lokasiPeserta + '.';
                db.collection('peserta').doc(doc.id).update({
                    lokasi : lokasiPeserta
                }).then(() => {
                    formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        pengguna : nama,
                        waktuOverview : new Date().getTime(),
                        overview : 'update-user',
                        overviewCadangan : overviewCadangan
                    })
                })                
            }
                })
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
    db.collection('peserta').doc(doc.id).get().then(function(item){
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
    let tanggal = new Date().getTime();
        db.collection('overview').add({
            penggunaOverview : docs.data().username,
            waktuOverview : tanggal,
            pengguna : item.data().nama,
            overview : 'delete-user'
            })
        })
    }).then(() => {
    if(document.querySelector('#gaji' + doc.id)){
        document.querySelector('#gaji' + doc.id).remove();
    }
    $(document).ready(function() {
    let tugasPeserta = document.querySelectorAll('.tugasseseorang' + nama.toLowerCase().replace(/\s/g, "-"))
    for(let x = 0;x<tugasPeserta.length;x++){
            let id = tugasPeserta[x].getAttribute('data-id')
            db.collection('tugas').doc(id).delete();
        }

    let tugasPesertaSelesai = document.querySelectorAll('.tugasseseorangselesai' + nama.toLowerCase().replace(/\s/g, "-"))
    for(let x = 0;x<tugasPesertaSelesai.length;x++){
            let id = tugasPesertaSelesai[x].getAttribute('data-id')
            db.collection('tugasSelesai').doc(id).delete()
        }

    let kesalahanPeserta = document.querySelectorAll('.kesalahanseseorang' + nama.toLowerCase().replace(/\s/g, "-"))
    for(let x = 0;x<kesalahanPeserta.length;x++){
            let id = kesalahanPeserta[x].getAttribute('data-id')
            db.collection('kesalahan').doc(id).delete()
        }
    })   
    db.collection('peserta').doc(doc.id).delete();
    $('#modaleditpeserta' + doc.id).modal('hide');
    })
            }
        }
    })
}

function renderHapusPeserta(doc){
    let nama = doc.data().nama;
    let email = doc.data().email;    
    let refreshRemoveRole;
    for(let x = 0; x<daftarKaryawan.length; x++){
        if(daftarKaryawan[x] == nama.toLowerCase().replace(/\s/g, "-")){
            daftarKaryawan.splice(x,1)
        }
    }
    for(let x = 0; x<daftarEmailKaryawan.length; x++){
        if(daftarEmailKaryawan[x] == email){
            daftarEmailKaryawan.splice(x,1)
        }
    }    
    let removeRole = functions.httpsCallable('removeRole');
    removeRole({email: email}).then(() => {
            if(auth.currentUser.email == email){
                auth.onAuthStateChanged(user => {
                        user.getIdToken(true).then(() => {
                            user.getIdTokenResult().then(idTokenResult => {
                                refreshRemoveRole = setInterval(refreshRemoveRole,10);
                                function refreshRemoveRole(){
                                    if(idTokenResult.claims.adminKantor == false && idTokenResult.claims.member == false){
                                    clearInterval(refreshRemoveRole)
                                    alert('Terdapat suatu perubahan pada tampilan halaman website anda, halaman akan direfresh kembali. Jika tidak terdapat perubahan apapun pada tampilan website, Diharapkan anda keluar dan masuk lagi kembali pada website.')
                                    window.location.reload();
                                    }
                                }
                            })
                        })
                    })
                }
            })
}

const analisisStr = document.querySelector('#list-strength');
const analisisWks = document.querySelector('#list-weakness');
const analisisOpt = document.querySelector('#list-oportunity');
const analisisThr = document.querySelector('#list-threat');
const modalSwot = document.querySelector('#modal-edit-swot')
const listSwot = document.querySelector('#list-swot')
function renderSwot(doc){
    let tr = document.createElement('tr');
    let div = document.createElement('div');
    let swot = document.createElement('div');
    let analisis = doc.data().analisis;
    let kontenAnalisis = doc.data().kontenAnalisis;
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('data-toggle', 'modal');
    tr.setAttribute('data-target', '#modaleditswot' + doc.id);
    tr.setAttribute('id','swot' + doc.id);
    tr.classList.add('dokumentasi-swot' + doc.id, 'swot', analisis.toLowerCase());
    div.classList.add('dokumentasi-swot-kedua' + doc.id);
    tr.innerHTML = `
    <td style="font-weight:bold;justify-content:center;align-items:center;vertical-align:middle;" id="analisis-swot-table${doc.id}">${analisis}</td>
    <td id="konten-analisis-table${doc.id}" style="text-align:left !important;">${kontenAnalisis}</td>
    `
    div.innerHTML = `<div id="jumlah-data-swot">Jumlah masing-masing data analisa SWOT pada Strength sebesar <span id="jumlah-strength"></span>, Weakness <span id="jumlah-weakness"></span>, Oportunity <span id="jumlah-oportunity"></span>, Threat <span id="jumlah-threat"></span>.</div>`

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
        <div class="data-analisis">
        <div class="info-analisis">
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

    if(!document.querySelector('#jumlah-data-swot')){
        listSwot.appendChild(div);
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
        e.stopImmediatePropagation();
        let formEdit = document.querySelector('#modal-analisis' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let analisisUpdate = document.querySelector('#analisis-swot' + doc.id).value;
            let kontenAnalisisUpdate = document.querySelector('#konten-analisis' + doc.id).value;
            let overviewCadangan;
            db.collection('swot').doc(doc.id).get().then(function(item){
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
                analisis = item.data().analisis;
                kontenAnalisis = item.data().kontenAnalisis;                
                let tanggal = new Date().getTime();
            if(analisis == analisisUpdate && kontenAnalisis == kontenAnalisisUpdate.replace(/\n\r?/g, '<br/>')){
                alert('Tidak ada perubahan yang terjadi pada kolom kolom berikut');
            } else if(analisis != analisisUpdate && kontenAnalisis != kontenAnalisisUpdate.replace(/\n\r?/g, '<br/>')){
            overviewCadangan = 'mengubah suatu data analisa swot ' + analisis.toLowerCase() + ' menjadi ' + analisisUpdate.toLowerCase() + ' beserta kontennya.';
            db.collection('swot').doc(doc.id).update({
                analisis : analisisUpdate,
                analisisSebelumnya : analisis,
                kontenAnalisis : kontenAnalisisUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overviewCadangan : overviewCadangan,
                        overview : 'update-swot'
                    })
                })
            } else if(analisis != analisisUpdate){
            overviewCadangan = 'mengubah suatu data analisa swot ' + analisis.toLowerCase() + ' menjadi ' + analisisUpdate.toLowerCase() + '.';
            db.collection('swot').doc(doc.id).update({
                analisis : analisisUpdate,
                analisisSebelumnya : analisis
            }).then(() => {
                formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overviewCadangan : overviewCadangan,
                        overview : 'update-swot'
                    })
                })
            } else if(kontenAnalisis != kontenAnalisisUpdate.replace(/\n\r?/g, '<br/>')){
            overviewCadangan = 'mengubah konten suatu data analisa swot pada ' + analisis.toLowerCase() + '.';
            db.collection('swot').doc(doc.id).update({
                kontenAnalisis : kontenAnalisisUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overviewCadangan : overviewCadangan,
                        overview : 'update-swot'
                    })
                })                
            }
                })
            })
        })
    })
    
    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', function(e){
    e.stopPropagation();
    let konfirmasi = confirm('Anda yakin ingin menghapus data analisis swot ini?');
    if(konfirmasi == true){
    db.collection('swot').doc(doc.id).get().then(function(item){
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
    let tanggal = new Date().getTime();
        db.collection('overview').add({
            penggunaOverview : docs.data().username,
            waktuOverview : tanggal,
            analisisSwot : item.data().analisis,
            kontenAnalisis : item.data().kontenAnalisis,
            overview : 'delete-swot'
            })
        }).then(() => {
            db.collection('swot').doc(doc.id).delete();
            $('#modaleditswot' + doc.id).modal('hide');
                })
            })    
        }
    })
}

const itemKeluar = document.querySelectorAll('.item-keluar');
const itemMasuk = document.querySelectorAll('.item-masuk');
const navbarMenu = document.querySelectorAll('.navbar-menu');
const setupUI = (user) => {    
  if (user) {
        let x = window.matchMedia("(max-width: 900px)");
        let z = window.matchMedia("(max-width: 700px)");
        db.collection('pengguna').doc(user.uid).get().then(doc => {
        let rolePeserta = document.querySelectorAll('.role-peserta');
        let editPeserta = document.querySelectorAll('.edit-peserta');
        let hapusPeserta = document.querySelectorAll('.hapus-peserta');
        let editTugas = document.querySelectorAll('.edit-tugas');
        let hapusTugas = document.querySelectorAll('.hapus-tugas');
        let copyTugasSelesai = document.querySelectorAll('.copy-tugas-selesai');
        let downloadTugasSelesai = document.querySelectorAll('.download-tugas-selesai');
        let hapusTugasSelesai = document.querySelectorAll('.hapus-tugas-selesai');
        let filePenyelesaianTugasBody = document.querySelectorAll('.file-penyelesaian-tugas-body');
        let buktiPenyelesaianTugasBody = document.querySelectorAll('.bukti-penyelesaian-tugas-body');
        let editKesalahan = document.querySelectorAll('.edit-kesalahan');
        let hapusKesalahan = document.querySelectorAll('.hapus-kesalahan');
        let peserta = document.querySelectorAll('.peserta');
        let tugas = document.querySelectorAll('.tugasseseorang');
        let tugasSelesai = document.querySelectorAll('.tugasseseorangselesai');
        let kesalahan = document.querySelectorAll('.kesalahanseseorang');
        let bodyEmail = document.querySelectorAll('.body-email');
        let emailTable = document.querySelectorAll('.email-table');
        let username = doc.data().username;
        let kataSambut = document.querySelectorAll('.kata-sambutan');
        let overview = document.querySelectorAll('.overview');
        let overviewIndividu = document.querySelectorAll('.overview-' + username.toLowerCase().replace(/\s/g, "-"))
        let penggunaTargetOverview = document.querySelectorAll('.pengguna-target-overview');
        let editKategoriMenu = document.querySelectorAll('.edit-kategori-menu');
        let hapusKategoriMenu = document.querySelectorAll('.hapus-kategori-menu');
        let editMenu = document.querySelectorAll('.edit-menu');
        let hapusMenu = document.querySelectorAll('.hapus-menu');
        let tombolTambahMenu = document.querySelectorAll('.tombol-tambah-menu');
        let dataMenu = document.querySelectorAll('.data-menu');
        let catatan = document.querySelectorAll('.catatan');
        let selesaiPerpindahan = document.querySelectorAll('.selesai-perpindahan-barang');
        let hapusPerpindahan = document.querySelectorAll('.hapus-perpindahan-barang');
        let editPerpindahan = document.querySelectorAll('.edit-perpindahan-barang');
        let hapusPengumuman = document.querySelectorAll('.hapuspengumuman');
        let editPengumuman = document.querySelectorAll('.editpengumuman');
        let pengeluaran = document.querySelectorAll('.pengeluaran');
        let pengeluaranSelesai = document.querySelectorAll('.pengeluaran-selesai');
        let selesaiPengeluaran = document.querySelectorAll('.selesai-pengeluaran');
        let selesaiPengeluaranKedua = document.querySelectorAll('.selesai-pengeluaran-kedua');

        for(let x = 0; x<kataSambut.length; x++){
            kataSambut[x].innerHTML = 'Hallo ' + username + '!';
        }    
    
        if(username == "Admin Galaxy" && user.email == 'useradmin@galaxy.id'){
        document.querySelector('#pengguna-overview').innerHTML = 'anda dan pengguna lain';
            winWidth900(x);
            x.addListener(winWidth900);
            function winWidth900(x){
            if (x.matches) {
                    document.querySelector('#halaman-tugas').style.display = 'block';                    
            } else {
                    document.querySelector('#halaman-tugas').style.display = 'grid';                    
            }
        }
            winWidth700(z);
            z.addListener(winWidth700);
            function winWidth700(z){
            if (z.matches) {
                    document.querySelector('#tabel-peserta').style.width = '120%';                    
            } else {
                    document.querySelector('#tabel-peserta').style.width = '100%';                    
            }
        }   
            [rolePeserta, editPeserta, hapusPeserta, editTugas, hapusTugas, copyTugasSelesai, downloadTugasSelesai, hapusTugasSelesai, filePenyelesaianTugasBody, buktiPenyelesaianTugasBody
            , editKesalahan, hapusKesalahan, tugas, tugasSelesai, kesalahan, bodyEmail, tombolTambahMenu, editPengumuman, hapusPengumuman, selesaiPengeluaranKedua
            , document.querySelector('#tombol-tambah-kesalahan'), document.querySelector('#tombol-tambah-peserta'), document.querySelector('#tombol-tambah-tugas')
            , document.querySelector('#tombol-tambah-kategori-menu')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].setAttribute('style','display:block !important;');
                    }                    
                } else {
                    item.setAttribute('style','display:block !important;');
                }
            });
            for(let x = 0; x<peserta.length;x++){
            peserta[x].style.display = 'table-row';
            }
            for(let x = 0; x<overview.length;x++){
            overview[x].style.display = '';
            }
            [pengeluaran, pengeluaranSelesai].forEach(item => {
                for(let x = 0; x<item.length;x++){
                    item[x].setAttribute('style','display:grid !important;');
                }                
            });
            [editKategoriMenu, hapusKategoriMenu, editMenu, hapusMenu, selesaiPengeluaran].forEach(item => {
                for(let x = 0; x<item.length;x++){
                    item[x].setAttribute('style','display:flex !important;');
                }                    
            });
            [document.querySelector('#customer-reply'), document.querySelector('#google-sheet')].forEach(item => {
                item.style.display = 'flex';
            });
            [navbarMenu, document.querySelector('#tambahpengumuman'), document.querySelector('#myTabContent'), document.querySelector('#jumbotron-performa-peserta'), document.querySelector('#jumbotron-swot')
            , document.querySelector('#daftar-peserta'), document.querySelector('#halaman-kesalahan'), document.querySelector('#tambahperpindahanbarang')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].style.display = 'block';
                    }                    
                } else {
                    item.style.display = 'block';                    
                }
            });
            [document.querySelector('#list-menu-tambahan'), document.querySelector('#list-menu-tambahan-kedua'), document.querySelector('#list-menu-tambahan-ketiga'), document.querySelector('#list-menu-tambahan-keempat'),
             document.querySelector('#kalender')].forEach(item => {
                item.style.display = 'grid';                                      
            });
            document.querySelector('#jumbotron-performa-peserta-individu').style.display = 'none';
        } else if(user.adminKantor){
            document.querySelector('#pengguna-overview').innerHTML = 'anda dan pengguna lain';
            winWidth900(x);
            x.addListener(winWidth900);
            function winWidth900(x){
            if (x.matches) {
                    document.querySelector('#halaman-tugas').style.display = 'block';           
            } else {
                    document.querySelector('#halaman-tugas').style.display = 'grid';  
            }
        }   
            [rolePeserta, editPeserta, hapusPeserta, hapusTugasSelesai, editKesalahan, hapusKesalahan, bodyEmail, emailTable, editPengumuman, hapusPengumuman, document.querySelector('#tombol-tambah-kesalahan')
            , document.querySelector('#tombol-tambah-peserta')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].setAttribute('style','display:none !important;');
                    }        
                } else {
                    item.setAttribute('style','display:none !important;');
                }
            });
            [editTugas, hapusTugas, copyTugasSelesai, downloadTugasSelesai, filePenyelesaianTugasBody, buktiPenyelesaianTugasBody, tugas, tugasSelesai, kesalahan, tombolTambahMenu
            , selesaiPengeluaranKedua, document.querySelector('#tombol-tambah-tugas'), document.querySelector('#tombol-tambah-kategori-menu')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].setAttribute('style','display:block !important;');
                    }
                } else {
                    item.setAttribute('style','display:block !important;');
                }
            })
            for(let x = 0; x<peserta.length;x++){
            peserta[x].style.display = 'table-row';
            }
            for(let x = 0; x<overview.length;x++){
                if(overview[x].classList.contains('overview-' + username.toLowerCase().replace(/\s/g, "-"))){
                    overview[x].style.display = '';
                } else {
                    overview[x].style.display = 'none';
                }
            }
            [pengeluaran, pengeluaranSelesai].forEach(item => {
                for(let x = 0; x<item.length;x++){
                    item[x].setAttribute('style','display:grid !important;');
                }
            });
            [editKategoriMenu, hapusKategoriMenu, editMenu, hapusMenu, selesaiPengeluaran].forEach(item => {
                for(let x = 0; x<item.length;x++){
                    item[x].setAttribute('style','display:flex !important;');
                }                    
            });
            [navbarMenu, document.querySelector('#myTabContent'), document.querySelector('#jumbotron-performa-peserta'), document.querySelector('#daftar-peserta')
            , document.querySelector('#halaman-kesalahan'), document.querySelector('#tambahperpindahanbarang')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].style.display = 'block';
                    }
                } else {
                    item.style.display = 'block'
                }
            });
            [document.querySelector('#tambahpengumuman'), document.querySelector('#th-email'), document.querySelector('#th-email'), document.querySelector('#swot'), document.querySelector('#achievement')
            , document.querySelector('#jumbotron-performa-peserta-individu'), document.querySelector('#jumbotron-swot')].forEach(item => {
                item.style.display = 'none';
            });    
            [document.querySelector('#list-menu-tambahan'), document.querySelector('#list-menu-tambahan-kedua'), document.querySelector('#list-menu-tambahan-ketiga'), document.querySelector('#list-menu-tambahan-keempat'), document.querySelector('#kalender')].forEach(item => {
                item.style.display = 'grid';                                      
            });
            [document.querySelector('#customer-reply'), document.querySelector('#google-sheet')].forEach(item => {
                item.style.display = 'flex';
            })
        } else if(user.member){
        setInterval(function(){
        for(let x = 0; x<catatan.length; x++){
            let id = catatan[x].getAttribute('data-id')
            db.collection('catatan').doc(id).get().then(function(item){
            if(document.querySelector('#catatan' + doc.id)){
                if(item.data().pembuatCatatan.toLowerCase().replace(/\s/g, "-") == username.toLowerCase().replace(/\s/g, "-")){
                    if(document.querySelector('#tombol-pengaturan' + id)){
                    document.querySelector('#tombol-pengaturan' + id).style.setProperty('display', 'flex', 'important')
                    }
                } else {
                    if(document.querySelector('#tombol-pengaturan' + id)){
                    document.querySelector('#tombol-pengaturan' + id).style.setProperty('display', 'none', 'important')
                    }
                }
            }
            })
        }
        },10)            
            document.querySelector('#pengguna-overview').innerHTML = 'anda';
            winWidth900(x);
            x.addListener(winWidth900);
            function winWidth900(x){
            if (x.matches) {
                    document.querySelector('#halaman-tugas').style.display = 'block';
            } else {
                    document.querySelector('#halaman-tugas').style.display = 'grid';
            }
        }   
            [editPeserta, hapusPeserta, editTugas, hapusTugas, copyTugasSelesai, downloadTugasSelesai, hapusTugasSelesai, filePenyelesaianTugasBody, buktiPenyelesaianTugasBody, bodyEmail
            , emailTable, editKategoriMenu, hapusKategoriMenu, editMenu, hapusMenu, tombolTambahMenu, editPengumuman, hapusPengumuman, selesaiPerpindahan, hapusPerpindahan, editPerpindahan
            , selesaiPengeluaran, selesaiPengeluaranKedua, document.querySelector('#tombol-tambah-kesalahan'), document.querySelector('#tombol-tambah-peserta')
            , document.querySelector('#tombol-tambah-tugas'), document.querySelector('#tombol-tambah-kategori-menu'), document.querySelector('#lihatperpindahanpending')
            , document.querySelector('#lihatperpindahanselesai')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].setAttribute('style','display:none !important;');
                    }        
                } else {
                    item.setAttribute('style','display:none !important;');
                }                
            })
            for(let x = 0; x<peserta.length;x++){
                if(peserta[x].classList.contains(username.toLowerCase().replace(/\s/g, "-"))){
                    peserta[x].style.display = 'table-row';
                } else {
                    peserta[x].style.display = 'none';
                }
            }
            for(let x = 0; x<tugas.length;x++){
                if(tugas[x].classList.contains('tugasseseorang' + username.toLowerCase().replace(/\s/g, "-"))){
                    tugas[x].setAttribute('style','display:block !important;');
                } else {
                    tugas[x].setAttribute('style','display:none !important;');
                }
            }
            for(let x = 0; x<tugasSelesai.length;x++){
                if(tugasSelesai[x].classList.contains('tugasseseorangselesai' + username.toLowerCase().replace(/\s/g, "-"))){
                    tugasSelesai[x].setAttribute('style','display:block !important;');
                } else {
                    tugasSelesai[x].setAttribute('style','display:none !important;');
                }
            }
            for(let x = 0; x<kesalahan.length;x++){
                if(kesalahan[x].classList.contains('kesalahanseseorang' + username.toLowerCase().replace(/\s/g, "-"))){
                    kesalahan[x].setAttribute('style','display:block !important;');
                } else {
                    kesalahan[x].setAttribute('style','display:none !important;');
                }
            }
            for(let x = 0; x<overview.length;x++){
                if(overview[x].classList.contains('overview-' + username.toLowerCase().replace(/\s/g, "-"))){
                    overview[x].style.display = '';
                } else {
                    overview[x].style.display = 'none';
                }
            }
            for(let x = 0; x<penggunaTargetOverview.length; x++){
                if(penggunaTargetOverview[x].classList.contains('pengguna-target-overview-' + username.toLowerCase().replace(/\s/g, "-"))){
                    penggunaTargetOverview[x].innerHTML = 'anda';
                }
            }
            for(let x = 0; x<pengeluaran.length;x++){
                if(pengeluaran[x].classList.contains('pengeluaran-' + username.toLowerCase().replace(/\s/g, "-"))){
                    pengeluaran[x].style.display = 'grid';
                    pengeluaran[x].style.gridTemplateColumns = 'auto 50px';
                } else {
                    pengeluaran[x].style.display = 'none';
                }
            }
            for(let x = 0; x<pengeluaranSelesai.length;x++){
                if(pengeluaranSelesai[x].classList.contains('pengeluaran-selesai-' + username.toLowerCase().replace(/\s/g, "-"))){
                    pengeluaranSelesai[x].style.display = 'grid';
                } else {
                    pengeluaranSelesai[x].style.display = 'none';
                }
            }
            [navbarMenu, document.querySelector('#myTabContent'), document.querySelector('#jumbotron-performa-peserta-individu'), document.querySelector('#halaman-kesalahan')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].style.display = 'block';
                    }                    
                } else {
                    item.style.display = 'block';                    
                }
            });
            [document.querySelector('#tambahpengumuman'), document.querySelector('#swot'), document.querySelector('#achievement'), document.querySelector('#transaksi-berjalan'), document.querySelector('#retur-dealer')
            , document.querySelector('#surat-jalan'), document.querySelector('#jumbotron-performa-peserta'), document.querySelector('#jumbotron-swot'), document.querySelector('#daftar-peserta')
            , document.querySelector('#tambahperpindahanbarang')].forEach(item => {
                item.style.display = 'none';
            });
            [document.querySelector('#list-menu-tambahan'), document.querySelector('#list-menu-tambahan-kedua'), document.querySelector('#list-menu-tambahan-ketiga'), document.querySelector('#list-menu-tambahan-keempat'),
             document.querySelector('#kalender')].forEach(item => {
                item.style.display = 'grid';                                      
            });
            [document.querySelector('#customer-reply'), document.querySelector('#google-sheet')].forEach(item => {
                item.style.display = 'flex';
            })
            document.querySelector('#jumbotron-perpindahan-barang').style.setProperty('margin-top', '10px', 'important');            
        } else {
            [editPeserta, hapusPeserta, editTugas, hapusTugas, document.querySelector('#tombol-tambah-kesalahan'), document.querySelector('#tombol-tambah-peserta')
            , document.querySelector('#tombol-tambah-tugas')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].setAttribute('style','display:none !important;');
                    }        
                } else {
                    item.setAttribute('style','display:none !important;');
                }                
            });
            [navbarMenu, document.querySelector('#customer-reply'), document.querySelector('#google-sheet'), document.querySelector('#jumbotron-performa-peserta'), document.querySelector('#jumbotron-performa-peserta-individu')
            , document.querySelector('#daftar-peserta'), document.querySelector('#halaman-tugas'), document.querySelector('#halaman-kesalahan'), document.querySelector('#kalender')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].style.display = 'none';
                    }        
                } else {
                    item.style.display = 'none';
                }                
            });            
            document.querySelector('#myTabContent').style.display = 'block';
        }  
    document.querySelector('#pengguna-akun').innerHTML = username;
    document.querySelector('#email-akun').innerHTML = user.email;
    document.querySelector('#tombol-burger').style.visibility = 'visible';
    itemMasuk.forEach(item => item.style.display = 'block');
    itemKeluar.forEach(item => item.style.display = 'none');

    if(/Mobi/.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)){
      document.querySelector('#cetak-label').style.display = 'none';
      document.querySelector('#surat-jalan').style.display = 'none';
      for(let x = 0; x<document.querySelectorAll('.print-retur').length; x++){
        document.querySelectorAll('.print-retur')[x].style.display = 'none';
      }
    }

    let reset = document.querySelector('#reset-password-akun');
    let formResetPassword = document.querySelector('#form-reset-password');
    let formHapusAkun = document.querySelector('#form-hapus-akun')
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
        let credential = firebase.auth.EmailAuthProvider.credential(user.email, passwordLama);
        user.reauthenticateWithCredential(credential).then(function (){
            let konfirmasi = confirm('Apa anda yakin ingin mereset ulang password akun ini?');
            if(konfirmasi == true){
            let waktuOverview = new Date().getTime();
                db.collection('overview').add({
                    penggunaOverview : username,
                    waktuOverview : waktuOverview,
                    overview : 'change-password'
                }).then(function (){
            user.updatePassword(passwordBaru).then(function (){
                $('#modalpengaturanakun').modal('hide');
                alert('Password anda berhasil diubah!');
                formResetPassword.style.display = 'none';
                })
            })
            }
        })

        } else if(passwordLama != konfirmasiPasswordLama){
            alert('Kolom yang anda isi pada password lama dan konfirmasi password lama tidak sama!');
        }
        
    })


    let hapusAkun = document.querySelector('#hapus-akun');
    hapusAkun.addEventListener('click', function(e) {
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
                    let waktuOverview = new Date().getTime();
                    db.collection('overview').add({
                        penggunaOverview : username,
                        waktuOverview : waktuOverview,
                        overview : 'delete-account'
                        })
                    })
            }
                })
            
        })

const menuPilihan = [];
document.querySelector('#search-menu').addEventListener('input', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    setTimeout(function(){      
    let input, filter, ul, li, a, i, txtValue, found, sum = 0, hasilMenu, menu, id, ambilId, kategoriMenu, href, semuaMenu = '', semuaMenuTampilan, atas = -1, bawah, hitunganAtas = 1;
    input = document.querySelector('#search-menu');
    if(input.value.length == 0){
    menuPilihan.push(-1);
    document.querySelector('#hasil-pencarian').innerHTML = '';
    } else if(input.value.length > 0){
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll('.list-menu');
    for(let x = 0; x<ul.length; x++){
        li = ul[x].getElementsByTagName('li');
        for(let y = 0; y<li.length; y++){
            a = li[y].getElementsByTagName('a')[0];
            txtValue = a.textContent || a.innerText;
            id = li[y].getAttribute('data-id');
            href = a.getAttribute('href');
                if(txtValue.toUpperCase().indexOf(filter) > -1) {
                    ambilId = ul[x].getAttribute('id').slice(9,ul[x].getAttribute('id').length);
                    kategoriMenu = document.querySelector('#nama-kategori-menu-tampilan' + ambilId).textContent;
                    hasilMenu = `<div class="pencarian"><a href="${href}" class="link-pencarian" id="link-pencarian${id}" target="_blank"><span class="induk-pencarian">${kategoriMenu}</span> > ${a.textContent}</a></div>`;
                    semuaMenu += hasilMenu;
                    semuaMenuTampilan = semuaMenu;
                    found = 1;
                    sum += found;
                } else {
                    found = 0;
                    sum += found;                  
                }
            }
        }        
        if(sum == 0){
            if(!document.querySelector('#hasil-menu-kosong')){
                if(document.querySelector('#hasil-menu')){
                    document.querySelector('#hasil-menu').remove();
                }
                menu = document.createElement('div');
                menu.setAttribute('id','hasil-menu-kosong');
                menu.innerHTML = `
                <div id="ketemu-hasil-pencarian">No Results Found.</div>
                `
                document.querySelector('#hasil-pencarian').appendChild(menu)                
            } else if(document.querySelector('#hasil-menu-kosong')){
                if(sum != 0){            
                document.querySelector('#hasil-menu-kosong').remove();                
                }
            }
        } else {
            if(!document.querySelector('#hasil-menu')){
                if(document.querySelector('#hasil-menu-kosong')){
                    document.querySelector('#hasil-menu-kosong').remove(); 
                }
                menu = document.createElement('div');
                menu.setAttribute('id','hasil-menu');
                menu.innerHTML = `
                ${semuaMenuTampilan}
                <div id="ketemu-hasil-pencarian">Found ${sum} on same result.</div>
                `
                document.querySelector('#hasil-pencarian').appendChild(menu);

                document.querySelector('#search-menu').addEventListener('keydown',function(e){
                    e.stopImmediatePropagation();
                if(e.keyCode === 40){
                    if(menuPilihan.length == 0){
                    atas += hitunganAtas
                    let cariLinkPencarian = atas
                    let linkPencarian = document.querySelectorAll('.link-pencarian');
                    for(let x = 0; x<linkPencarian.length; x++){
                        if(x == cariLinkPencarian){
                            linkPencarian[x].style.backgroundColor = 'lightskyblue';
                            window.scrollTo(0, (x+1)*30)
                        } else {
                            linkPencarian[x].style.backgroundColor = 'white';
                        }
                    }
                    menuPilihan.push(atas)
                    } else if(menuPilihan.length > 0){
                    atas = 1
                    let cariLinkPencarian = menuPilihan[menuPilihan.length - 1] + atas
                    let linkPencarian = document.querySelectorAll('.link-pencarian');
                    if(cariLinkPencarian > linkPencarian.length - 1){
                      for(let x = 0; x<linkPencarian.length; x++){
                        linkPencarian[x].style.backgroundColor = 'white';
                      }                      
                        linkPencarian[0].style.backgroundColor = 'lightskyblue'
                        window.scrollTo(0, 30)
                        menuPilihan.push(0);
                    } else {
                    for(let x = 0; x<linkPencarian.length; x++){
                        if(x == cariLinkPencarian){
                            linkPencarian[x].style.backgroundColor = 'lightskyblue';
                            window.scrollTo(0, (x+1)*30)
                        } else {
                            linkPencarian[x].style.backgroundColor = 'white';
                        }
                    }
                    menuPilihan.push(menuPilihan[menuPilihan.length - 1] + atas)
                    }
                }
                e.preventDefault();
                } else if(e.keyCode === 38){
                if(menuPilihan.length > 0){
                    bawah = -1
                    let cariLinkPencarian = menuPilihan[menuPilihan.length - 1] + bawah;
                    let linkPencarian = document.querySelectorAll('.link-pencarian');
                    if(cariLinkPencarian < 0){
                      for(let x = 0; x<linkPencarian.length; x++){
                        linkPencarian[x].style.backgroundColor = 'white';
                      }
                        linkPencarian[linkPencarian.length - 1].style.backgroundColor = 'lightskyblue';
                        let posisi = linkPencarian[linkPencarian.length - 1].getBoundingClientRect();
                        window.scrollTo(0, linkPencarian.length*30)
                        menuPilihan.push(linkPencarian.length - 1)
                    } else {
                    for(let x = 0; x<linkPencarian.length; x++){
                        if(x == cariLinkPencarian){
                            linkPencarian[x].style.backgroundColor = 'lightskyblue';
                            window.scrollTo(0, (x+1)*30)
                        } else {
                            linkPencarian[x].style.backgroundColor = 'white';
                        }
                    }                    
                    menuPilihan.push(menuPilihan[menuPilihan.length - 1] + bawah)
                    }
                }
                e.preventDefault();
            } else if(e.keyCode === 13){
              document.querySelectorAll('.link-pencarian')[menuPilihan[menuPilihan.length - 1]].click();
            }

                })           

            } else if(document.querySelector('#hasil-menu')){
                document.querySelector('#hasil-menu').remove();
                menu = document.createElement('div');
                menu.setAttribute('id','hasil-menu');
                menu.innerHTML = `
                ${semuaMenuTampilan}
                <div id="ketemu-hasil-pencarian">Found ${sum} on same result.</div>
                `
                document.querySelector('#hasil-pencarian').appendChild(menu);

                document.querySelector('#search-menu').addEventListener('keydown',function(e){
                    e.stopImmediatePropagation();
                if(e.keyCode === 40){
                    if(menuPilihan.length == 0){
                    atas += hitunganAtas
                    let cariLinkPencarian = atas
                    let linkPencarian = document.querySelectorAll('.link-pencarian');
                    for(let x = 0; x<linkPencarian.length; x++){
                        if(x == cariLinkPencarian){
                            linkPencarian[x].style.backgroundColor = 'lightskyblue';
                            window.scrollTo(0, (x+1)*30)
                        } else {
                            linkPencarian[x].style.backgroundColor = 'white';
                        }
                    }
                    menuPilihan.push(atas)
                    } else if(menuPilihan.length > 0){
                    atas = 1
                    let cariLinkPencarian = menuPilihan[menuPilihan.length - 1] + atas
                    let linkPencarian = document.querySelectorAll('.link-pencarian');
                    if(cariLinkPencarian > linkPencarian.length - 1){
                      for(let x = 0; x<linkPencarian.length; x++){
                        linkPencarian[x].style.backgroundColor = 'white';
                      }                      
                        linkPencarian[0].style.backgroundColor = 'lightskyblue'
                        window.scrollTo(0, 30)
                        menuPilihan.push(0);
                    } else {
                    for(let x = 0; x<linkPencarian.length; x++){
                        if(x == cariLinkPencarian){
                            linkPencarian[x].style.backgroundColor = 'lightskyblue';
                            window.scrollTo(0, (x+1)*30)
                        } else {
                            linkPencarian[x].style.backgroundColor = 'white';
                        }
                    }
                    menuPilihan.push(menuPilihan[menuPilihan.length - 1] + atas)
                    }
                }
                e.preventDefault();
                } else if(e.keyCode === 38){
                if(menuPilihan.length > 0){
                    bawah = -1
                    let cariLinkPencarian = menuPilihan[menuPilihan.length - 1] + bawah;
                    let linkPencarian = document.querySelectorAll('.link-pencarian');
                    if(cariLinkPencarian < 0){
                      for(let x = 0; x<linkPencarian.length; x++){
                        linkPencarian[x].style.backgroundColor = 'white';
                      }
                        linkPencarian[linkPencarian.length - 1].style.backgroundColor = 'lightskyblue';
                        let posisi = linkPencarian[linkPencarian.length - 1].getBoundingClientRect();
                        window.scrollTo(0, linkPencarian.length*30)
                        menuPilihan.push(linkPencarian.length - 1)

                    } else {
                    for(let x = 0; x<linkPencarian.length; x++){
                        if(x == cariLinkPencarian){
                            linkPencarian[x].style.backgroundColor = 'lightskyblue';
                            window.scrollTo(0, (x+1)*30)
                        } else {
                            linkPencarian[x].style.backgroundColor = 'white';
                        }
                    }                    
                    menuPilihan.push(menuPilihan[menuPilihan.length - 1] + bawah)
                    }
                }
                e.preventDefault();
            } else if(e.keyCode === 13){
              document.querySelectorAll('.link-pencarian')[menuPilihan[menuPilihan.length - 1]].click();
            }

                })

            }
        }
    }
    },0)
})

})

  } else {
    let tombolTambah = document.querySelectorAll('.tombol-tambah');
    let tombolKembali = document.querySelectorAll('.tombol-kembali');
    [tombolTambah, tombolKembali, document.querySelector('#myTabContent')].forEach(item => {
        if(item.length != undefined){
            for(let x = 0; x<tombolKembali.length; x++){
                item[x].style.marginLeft = '0';
                item[x].style.transition = '0';
            }
        } else {
            item.style.marginLeft = '0';
            item.style.transition = '0';
        }
    });
    for(let x = 0; x<navbarMenu.length;x++){
    navbarMenu[x].style.display = 'none';
    }             
    [navbarMenu, document.querySelector('#myTabContent'), document.querySelector('#customer-reply'), document.querySelector('#google-sheet'), document.querySelector('#jumbotron-performa-peserta')
    , document.querySelector('#jumbotron-performa-peserta-individu'), document.querySelector('#daftar-peserta'), document.querySelector('#list-menu-tambahan'), document.querySelector('#list-menu-tambahan-kedua')
    , document.querySelector('#list-menu-tambahan-ketiga'), document.querySelector('#list-menu-tambahan-keempat'), document.querySelector('#halaman-tugas'), document.querySelector('#halaman-kesalahan')
    , document.querySelector('#kalender')].forEach(item => {
        if(item.length != undefined){
            for(let x = 0; x<item.length;x++){
               item[x].style.display = 'none';
            }        
        } else {
            item.style.display = 'none';
         }
    });       
    document.querySelector('.navbar-collapse').classList.remove('show');
    [document.querySelector('#tombol-tambah-kesalahan'), document.querySelector('#tombol-tambah-peserta'), document.querySelector('#tombol-tambah-tugas')].forEach(item => {
        item.setAttribute('style','display:none !important;');
    });
    [document.querySelector('#pengguna-akun'), document.querySelector('#email-akun')].forEach(item => {
        item.innerHTML = '';
    })
    document.querySelector('#tombol-burger').style.visibility = 'hidden';
    itemMasuk.forEach(item => item.style.display = 'none');
    itemKeluar.forEach(item => item.style.display = 'block');
    document.querySelector('#form-masuk').setAttribute('style','display:block !important;');
  }
}

function renderUpdatePeserta(doc){
    let nama = doc.data().nama;
    let email = doc.data().email;
    let libur = doc.data().libur;
    let lokasi = doc.data().lokasi;
    let role = doc.data().role;    
    let opsiTugas = document.createElement('option');
    let opsiTugasKedua = document.createElement('option');
    opsiTugas.classList.add('opsi-target-peserta' + doc.id, 'pemilihan-tugas-peserta');
    opsiTugas.innerHTML = nama;
    let addMemberRole = functions.httpsCallable('addMemberRole');
    let addAdminRole = functions.httpsCallable('addAdminRole');
    let refreshRoleAdminKantor;
    let refreshRoleMember;

    document.querySelector('#nama-table' + doc.id).innerHTML = nama;
    document.querySelector('#libur-table' + doc.id).innerHTML = libur;
    document.querySelector('#lokasi-table' + doc.id).innerHTML = lokasi;
    document.querySelector('#nama' + doc.id).innerHTML = nama.toUpperCase();
    document.querySelector('#libur' + doc.id).innerHTML = libur;
    document.querySelector('#lokasi' + doc.id).innerHTML = lokasi;
    document.querySelector('#peserta' + doc.id).innerHTML = nama + ' ';

    let hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    let hariIni = new Date();
    let hariLibur = hariIni.getDay();
    let penentuanLibur = hari[hariLibur];
    if(penentuanLibur == libur){
        document.querySelector('#status-td-peserta' + doc.id).innerHTML = "Non-Aktif";
        document.querySelector('#status-td-peserta' + doc.id).style.color = "#e61c33";
        document.querySelector('#status-peserta' + doc.id).innerHTML = "Non-Aktif";
        document.querySelector('#status-peserta' + doc.id).style.color = "#e61c33";  
    } else {
        document.querySelector('#status-td-peserta' + doc.id).innerHTML = "Aktif";
        document.querySelector('#status-td-peserta' + doc.id).style.color = "#13eb5e";
        document.querySelector('#status-peserta' + doc.id).innerHTML = "Aktif";
        document.querySelector('#status-peserta' + doc.id).style.color = "#13eb5e";
        }

$(document).ready(function(){
    let status = document.querySelector('#status-peserta' + doc.id).innerHTML;
    let opsi = document.querySelector('.opsi-target-peserta' + doc.id);
    let opsiKedua = document.querySelector('.opsi-target-peserta-kedua' + doc.id);

        switch(status){
        case "Aktif":
        if(opsi){
            opsi.style.display = 'block';
        } else if(!opsi){
            document.querySelector('#target-peserta').appendChild(opsiTugas);
            opsiTugas.style.display = 'block';
        }
        break;
        case "Non-Aktif":
        if(opsi){
            opsi.style.display = 'none';
        } else if(!opsi){
            document.querySelector('#target-peserta').appendChild(opsiTugas);
            opsiTugas.style.display = 'none';
        }
    }

})

        switch(role){         
        case "Member":
        addMemberRole({email: email}).then(() => {
            if(auth.currentUser.email == email){
                auth.onAuthStateChanged(user => {
                        user.getIdToken(true).then(() => {
                            user.getIdTokenResult().then(idTokenResult => {
                                refreshRoleMember = setInterval(refreshRoleMember,10);
                                function refreshRoleMember(){
                                    if(idTokenResult.claims.member == true){
                                    clearInterval(refreshRoleMember)
                                    alert('Terdapat suatu perubahan pada tampilan halaman website anda, halaman akan direfresh kembali. Jika tidak terdapat perubahan apapun pada tampilan website, Diharapkan anda keluar dan masuk lagi kembali pada website.')
                                    window.location.reload();
                                    }
                                }                                 
                            })
                        })
                    })                
                }
            })           
        break;
        case "Admin Kantor":
        addAdminRole({email: email}).then(() => {
            if(auth.currentUser.email == email){
                auth.onAuthStateChanged(user => {
                        user.getIdToken(true).then(() => {
                            user.getIdTokenResult().then(idTokenResult => {
                                refreshRoleAdminKantor = setInterval(refreshRoleAdminKantor,10);
                                function refreshRoleAdminKantor(){
                                    if(idTokenResult.claims.adminKantor == true){
                                    clearInterval(refreshRoleAdminKantor)
                                    alert('Terdapat suatu perubahan pada tampilan halaman website anda, halaman akan direfresh kembali. Jika tidak terdapat perubahan apapun pada tampilan website, Diharapkan anda keluar dan masuk lagi kembali pada website.')
                                    window.location.reload();
                                    }
                                }                                
                            })
                        })
                    })
                }
            })

}


}

function renderUpdateSwot(doc){
    let analisis = doc.data().analisis;
    let analisisSebelumnya = doc.data().analisisSebelumnya;
    let kontenAnalisis = doc.data().kontenAnalisis;
    document.querySelector('.dokumentasi-swot' + doc.id).classList.remove(analisisSebelumnya.toLowerCase());
    document.querySelector('.dokumentasi-swot' + doc.id).classList.add(analisis.toLowerCase());
    document.querySelector('#analisis-swot-table' + doc.id).innerHTML = analisis;
    document.querySelector('#konten-analisis-table' + doc.id).innerHTML = kontenAnalisis;
    document.querySelector('#analisis-swot-body' + doc.id).innerHTML = analisis;
    document.querySelector('#konten-analisis-body' + doc.id).innerHTML = kontenAnalisis;
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
    div.classList.add('dokumentasi-tugas-peserta' + doc.id, 'tugasseseorang', 'tugasseseorang' + namaPeserta.toLowerCase().replace(/\s/g, "-"));
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
        <div class="data-tugas">
        <div class="info-tugas">
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
        <div class="form-group">
            <input type="file" accept="docx/*,xls/*,pdf/*,pptx/*,txt/*,html*/,css/*,js/*,image/*" id="file-penyelesaian${doc.id}" class="inputfile">
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

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-tugas' + doc.id);
        formEdit.style.display = "block";      
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let kontenTugasUpdate = document.querySelector('#konten-tugas' + doc.id).value.replace(/\n\r?/g, '<br/>');
            let perMingguUpdate = document.querySelector('#per-minggu' + doc.id).value;
            let perHariUpdate = document.querySelector('#per-hari' + doc.id).value;
            let perJamUpdate = document.querySelector('#per-jam' + doc.id).value;
            let perMenitUpdate = document.querySelector('#per-menit' + doc.id).value;
            let overviewCadangan;
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
            db.collection('tugas').doc(doc.id).get().then(function(item) {
            if(perMingguUpdate == "" && perHariUpdate == "" && perJamUpdate == "" && perMenitUpdate == ""){
                alert("Pastikan Mengisi Kolom Waktu Pengerjaan untuk Melanjuti Proses Mengedit Tugas");
           } else {
            kontenTugas = item.data().kontenTugas;            
            perMinggu = item.data().perMinggu;
            perHari = item.data().perHari;
            perJam = item.data().perJam;
            perMenit = item.data().perMenit;
            waktuRilis = item.data().waktuRilis;
            tanggalLuncur = item.data().tanggalLuncur
            tanggal = new Date(waktuRilis);
            //console.log(perMingguUpdate);
            //console.log(perMinggu);
            //console.log(perHariUpdate);
            //console.log(perHari);            
            //console.log(perJamUpdate);
            //console.log(perJam);            
            //console.log(perMenitUpdate);
            //console.log(perMenit);            
            waktuDeadline = tanggal.getTime() + ((perMinggu*7*24*60*60*1000) + (perHari*24*60*60*1000) + (perJam*60*60*1000) + (perMenit*60*1000))
            let waktuDeadlineBaru = tanggal.getTime() + ((perMingguUpdate*7*24*60*60*1000) + (perHariUpdate*24*60*60*1000) + (perJamUpdate*60*60*1000) + (perMenitUpdate*60*1000))
            if(kontenTugas == kontenTugasUpdate.replace(/\n\r?/g, '<br/>') && perMinggu == perMingguUpdate && perHari == perHariUpdate && perJam == perJamUpdate && perMenit == perMenitUpdate){
                alert('Tidak ada perubahan yang terjadi pada kolom kolom berikut');                
            } else if(kontenTugas != kontenTugasUpdate.replace(/\n\r?/g, '<br/>')){
                if(perMinggu != perMingguUpdate || perHari != perHariUpdate || perJam != perJamUpdate || perMenit != perMenitUpdate){
                    if(waktuDeadline < waktuDeadlineBaru){
                        overviewCadangan = 'mengubah konten dan menambahkan tenggat waktu Tugas ' + tanggalLuncur + ', CC : ' + namaPeserta + '.';
                    } else if(waktuDeadline > waktuDeadlineBaru){
                        overviewCadangan = 'mengubah konten dan mengurangi tenggat waktu Tugas ' + tanggalLuncur + ', CC : ' + namaPeserta + '.';
                    }                    
                } else {
                    overviewCadangan = 'mengubah konten Tugas ' + tanggalLuncur + ', CC : ' + namaPeserta + '.';
                }
                    db.collection('tugas').doc(doc.id).update({
                        kontenTugas : kontenTugasUpdate.replace(/\n\r?/g, '<br/>')
                    }).then(() =>{
                        formEdit.style.display = "none";
                        db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            penggunaTugas : item.data().namaPeserta,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-task',
                            overviewCadangan : overviewCadangan
                        })
                            })                   
            } else if(perMinggu != perMingguUpdate || perHari != perHariUpdate || perJam != perJamUpdate || perMenit != perMenitUpdate){
                if(waktuDeadline < waktuDeadlineBaru){
                    overviewCadangan = 'menambahkan tenggat waktu Tugas ' + tanggalLuncur + ', CC : ' + namaPeserta + '.';
                } else if(waktuDeadline > waktuDeadlineBaru){
                    overviewCadangan = 'mengurangi tenggat waktu Tugas ' + tanggalLuncur + ', CC : ' + namaPeserta + '.';
                }
                    db.collection('tugas').doc(doc.id).update({
                        perMinggu : perMingguUpdate,
                        perHari : perHariUpdate,
                        perJam : perJamUpdate,
                        perMenit : perMenitUpdate
                    }).then(() =>{
                        formEdit.style.display = "none";
                        db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            penggunaTugas : item.data().namaPeserta,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-task',
                            overviewCadangan : overviewCadangan
                        })
                            })                                
            }
            }
            })
        })
    })
})

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus tugas ini?');
        if(konfirmasi == true){
        db.collection('tugas').doc(doc.id).get().then(function(item){
            perMinggu = item.data().perMinggu;
            perHari = item.data().perHari;
            perJam = item.data().perJam;
            perMenit = item.data().perMenit;
            waktuRilis = item.data().waktuRilis;
            tanggal = new Date(waktuRilis);
            waktuDeadline = tanggal.setTime(tanggal.getTime() + ((perMinggu*7*24*60*60*1000) + (perHari*24*60*60*1000) + (perJam*60*60*1000) + (perMenit*60*1000)))
            waktuPenyelesaian = new Date(waktuDeadline);
            dd = String(waktuPenyelesaian.getDate()).padStart(2, '0');
            mm = String(waktuPenyelesaian.getMonth() + 1).padStart(2, '0'); 
            yyyy = waktuPenyelesaian.getFullYear();
            hh = ('0' + waktuPenyelesaian.getHours()).slice(-2);
            ms = ('0' + waktuPenyelesaian.getMinutes()).slice(-2);
            tanggalDeadline = dd + '/' + mm + '/' + yyyy + ', ' + hh + ':' + ms;  
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        db.collection('overview').add({
            penggunaOverview : docs.data().username,
            waktuOverview : new Date().getTime(),
            penggunaTugas : item.data().namaPeserta,
            kontenTugas : item.data().kontenTugas,
            tanggalLuncurTugas : item.data().tanggalLuncur,
            tanggalDeadlineTugas : tanggalDeadline,
            overview : 'delete-task'
            }).then(() => {
            if(doc.data().penggunaUID == auth.currentUser.uid){
                db.collection('tugas').doc(doc.id).delete();
            }
            $('#modaltugas' + doc.id).modal('hide');
                }) 
        })
            })  
        }
    })



    let selesai = document.querySelector('#selesai' + doc.id);
    selesai.addEventListener('click', function (e) {
        e.stopPropagation();
        let buktiPenyelesaian = document.querySelector('#bukti-penyelesaian' + doc.id).value.replace(/\n\r?/g, '<br/>');
        let filePenyelesaian = document.querySelector('#file-penyelesaian' + doc.id).files[0];
        let tanggalSekarang = new Date();
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(docs => {
        let username = docs.data().username;
        if(username == namaPeserta || 'Admin Galaxy'){
        db.collection('tugas').doc(doc.id).get().then(doc =>{
        let kontenTugasUpdate = doc.data().kontenTugas;
        let perMingguUpdate = doc.data().perMinggu;
        let perHariUpdate = doc.data().perHari;
        let perJamUpdate = doc.data().perJam;
        let perMenitUpdate = doc.data().perMenit;
        let tanggalUpdate = new Date(waktuRilis);
        let waktuDeadlineUpdate = tanggalUpdate.setTime(tanggalUpdate.getTime() + ((perMingguUpdate*7*24*60*60*1000) + (perHariUpdate*24*60*60*1000) + (perJamUpdate*60*60*1000) + (perMenitUpdate*60*1000)))
        let waktuSekarang = tanggalSekarang.getTime();
    if(waktuSekarang > waktuDeadlineUpdate){
        let konfirmasiTerlambat = confirm('Sepertinya anda terlambat untuk menyelesaikan tugas berikut, tugas masih bisa diselesaikan tetapi tugas berikut akan ditandai akan keterlambatan penyelesaian. Lanjutkan proses?');
        if(konfirmasiTerlambat == true){
        let tanggal = new Date();
        let waktuPenyerahan = tanggal.getTime();
        if(buktiPenyelesaian == "" && filePenyelesaian == null){
            buktiPenyelesaian = "Tidak Ada";
            filePenyelesaian = "Tidak Ada";
        } else if(buktiPenyelesaian == "" && filePenyelesaian != null){
            let refPenyimpanan = firebase.storage().ref('Tugas ' + doc.id + ' ' + tanggalLuncur.replace(/\//g,'-') + ' ' + namaPeserta +  '/' + filePenyelesaian.name);
            let penyimpanan = refPenyimpanan.put(filePenyelesaian);
            buktiPenyelesaian = "Tidak Ada";
            filePenyelesaian = filePenyelesaian.name;
        } else if(buktiPenyelesaian != "" && filePenyelesaian == null){
            filePenyelesaian = "Tidak Ada";
        } else if(buktiPenyelesaian != "" && filePenyelesaian != null){
            let refPenyimpanan = firebase.storage().ref('Tugas ' + doc.id + ' ' + tanggalLuncur.replace(/\//g,'-') + ' ' + namaPeserta +  '/' + filePenyelesaian.name);
            let penyimpanan = refPenyimpanan.put(filePenyelesaian);
            filePenyelesaian = filePenyelesaian.name;
        }
        let terlambat = `<span style="color:#e61c33;">(Terlambat)</span>`;
        db.collection('tugasSelesai').doc(doc.id).set({
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
            filePenyelesaian : filePenyelesaian,
            terlambat : terlambat
        }).then(() => {
            document.querySelector('#status-tugas' + doc.id).style.color = "#13eb5e";
            document.querySelector('#status-tugas' + doc.id).innerHTML = "COMPLETED";
            alert("Tugas berhasil diselesaikan!")
            $('#modaltugas' + doc.id).modal('hide');
            db.collection('tugas').doc(doc.id).delete();
      })
        }
    } else {
        let konfirmasi = confirm('Anda yakin ingin menyelesaikan tugas ini?');
        if(konfirmasi == true){
        let tanggal = new Date();
        let waktuPenyerahan = tanggal.getTime();
        if(buktiPenyelesaian == "" && filePenyelesaian == null){
            buktiPenyelesaian = "Tidak Ada";
            filePenyelesaian = "Tidak Ada";
        } else if(buktiPenyelesaian == "" && filePenyelesaian != null){
            let refPenyimpanan = firebase.storage().ref('Tugas ' + doc.id + ' ' + tanggalLuncur.replace(/\//g,'-') + ' ' + namaPeserta +  '/' + filePenyelesaian.name);
            let penyimpanan = refPenyimpanan.put(filePenyelesaian);
            buktiPenyelesaian = "Tidak Ada";
            filePenyelesaian = filePenyelesaian.name;
        } else if(buktiPenyelesaian != "" && filePenyelesaian == null){
            filePenyelesaian = "Tidak Ada";
        } else if(buktiPenyelesaian != "" && filePenyelesaian != null){
            let refPenyimpanan = firebase.storage().ref('Tugas ' + doc.id + ' ' + tanggalLuncur.replace(/\//g,'-') + ' ' + namaPeserta +  '/' + filePenyelesaian.name);
            let penyimpanan = refPenyimpanan.put(filePenyelesaian);
            filePenyelesaian = filePenyelesaian.name;
        }
        db.collection('tugasSelesai').doc(doc.id).set({
            namaPeserta : namaPeserta,
            kontenTugas : kontenTugas,
            perMinggu : perMinggu,
            perHari : perHari,
            perJam : perJam,
            perMenit : perMenit,
            waktuRilis : waktuRilis,
            tanggalLuncur : tanggalLuncur,
            waktuPenyerahan : waktuPenyerahan,
            buktiPenyelesaian : buktiPenyelesaian,
            filePenyelesaian : filePenyelesaian
        }).then(() => {
            document.querySelector('#status-tugas' + doc.id).style.color = "#13eb5e";
            document.querySelector('#status-tugas' + doc.id).innerHTML = "COMPLETED";
            alert("Tugas berhasil diselesaikan!")
            $('#modaltugas' + doc.id).modal('hide');
            db.collection('tugas').doc(doc.id).delete();
      })
     }
   }
   })
            } else {
                alert('Tugas ini hanya dapat diselesaikan oleh ' + namaPeserta + '!');
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
    div.classList.add('dokumentasi-tugas-peserta-selesai' + doc.id, 'tugasseseorangselesai', 'tugasseseorangselesai' + namaPeserta.toLowerCase().replace(/\s/g, "-"));
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
    let filePenyelesaian = doc.data().filePenyelesaian;
    let terlambat = doc.data().terlambat;
    let selisihWaktu = Number(waktuPenyerahan - waktuRilis);
    let performaTugas;
    if(selisihWaktu > 604800000 || selisihWaktu == 604800000){
        let perhitunganBulan = Math.floor(selisihWaktu/604800000) + ' Minggu ';
        let perhitunganHari = Math.floor((selisihWaktu%(604800000))/86400000) + ' Hari';
        let perhitunganJam = Math.floor((selisihWaktu%(86400000))/3600000) + ' Jam ';
        let perhitunganMenit = Math.floor((selisihWaktu%(3600000))/60000) + ' Menit ';
        let perhitunganDetik = Math.floor((selisihWaktu%(60000))/1000) + ' Detik';
        performaTugas = perhitunganBulan + perhitunganHari + perhitunganJam + perhitunganMenit + perhitunganDetik;
    } else if(selisihWaktu > 86400000 || selisihWaktu == 86400000){
        let perhitunganHari = Math.floor(selisihWaktu/86400000) + ' Hari';
        let perhitunganJam = Math.floor((selisihWaktu%(86400000))/3600000) + ' Jam ';
        let perhitunganMenit = Math.floor((selisihWaktu%(3600000))/60000) + ' Menit ';
        let perhitunganDetik = Math.floor((selisihWaktu%(60000))/1000) + ' Detik';
        performaTugas = perhitunganHari + perhitunganJam + perhitunganMenit + perhitunganDetik;
    } else if(selisihWaktu > 3600000 || selisihWaktu == 3600000){
        let perhitunganJam = Math.floor(selisihWaktu/3600000) + ' Jam ';
        let perhitunganMenit = Math.floor((selisihWaktu%(3600000))/60000) + ' Menit ';
        let perhitunganDetik = Math.floor((selisihWaktu%(60000))/1000) + ' Detik';
        performaTugas = perhitunganJam + perhitunganMenit + perhitunganDetik;
    } else if(selisihWaktu > 60000 || selisihWaktu == 60000){
        let perhitunganMenit = Math.floor(selisihWaktu/60000) + ' Menit ';
        let perhitunganDetik = Math.floor((selisihWaktu%60000)/1000) + ' Detik'
        performaTugas = perhitunganMenit + perhitunganDetik;
    } else if(selisihWaktu < 60000){
        let perhitunganDetik = Math.floor(selisihWaktu/1000) + ' Detik';
        performaTugas = perhitunganDetik;
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
        div.classList.add('terlambat'+ namaPeserta.toLowerCase().replace(/\s/g, "-"));
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
        <div class="data-tugas">
        <div class="info-tugas">
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
        <div id="waktu-penyelesaian-tugas${doc.id}" style="font-weight:bold;">${performaTugas} <span id="waktu-penyelesaian-${doc.id}"style="display:none;font-weight:normal;" class="waktu-penyelesaian-${namaPeserta.toLowerCase().replace(/\s/g, "-")}">${selisihWaktu}</span></div>
        <div>Waktu Deadline</div>
        <div>:</div>        
        <div style="font-weight:bold;" id="batas-waktu${doc.id}">${tanggalDeadline} <span id="peringatan-deadline${doc.id}" class="badge badge-danger"></span></div>
        <div>Status</div>
        <div>:</div> 
        <div id="status-tugas${doc.id}" style="font-weight:bold;color:#13eb5e;">COMPLETED</div>
        <div>Konten Tugas</div>
        <div>:</div> 
        <div id="update-konten-tugas${doc.id}">${kontenTugas}</div>
        <div class="file-penyelesaian-tugas-body">File Penyelesaian Tugas</div>
        <div class="file-penyelesaian-tugas-body">:</div> 
        <div id="file-penyelesaian-tugas${doc.id}" class="file-penyelesaian-tugas-body"></div>
        <div class="bukti-penyelesaian-tugas-body">Bukti Penyelesaian Tugas</div>
        <div class="bukti-penyelesaian-tugas-body">:</div> 
        <div id="bukti-penyelesaian-tugas${doc.id}" class="bukti-penyelesaian-tugas-body">${buktiPenyelesaian}</div>
        </div>
        <div id="copytugasselesai${doc.id}" class="btn btn-success copy copy-tugas-selesai">Copy Bukti Penyelesaian</div>
        <div id="downloadtugasselesai${doc.id}" class="btn btn-warning download download-tugas-selesai">Download File Penyelesaian Tugas</div>
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
    let range = document.getSelection().getRangeAt(0);
    range.selectNode(document.querySelector("#bukti-penyelesaian-tugas" + doc.id));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    })
}

    if(filePenyelesaian == "Tidak Ada"){
        document.querySelector("#downloadtugasselesai" + doc.id).classList.add("disabled");
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = filePenyelesaian;
    } else {
    let download = document.querySelector("#downloadtugasselesai" + doc.id);
    let karakterTitik = filePenyelesaian.lastIndexOf('.');
    let ekstensi = filePenyelesaian.substring(karakterTitik + 1);
    switch(ekstensi){
        case "docx":
        download.innerHTML = 'Download File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format word ini tersedia untuk didownload!';
        break;
        case "xls":
        download.innerHTML = 'Download File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format excel ini tersedia untuk didownload!';
        break;
        case "pptx":
        download.innerHTML = 'Download File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format powerpoint ini tersedia untuk didownload!';
        break;
        case "pdf":
        download.innerHTML = 'Lihat File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format pdf ini tersedia untuk didownload!';
        break;
        case "txt":
        download.innerHTML = 'Lihat File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format text ini tersedia untuk dilihat!';
        break;
        case "jpg":
        download.innerHTML = 'Lihat File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format gambar(jpg) ini tersedia untuk dilihat!';
        break;
        case "jpeg":
        download.innerHTML = 'Lihat File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format gambar(jpeg) ini tersedia untuk dilihat!';
        break;
        case "png":
        download.innerHTML = 'Lihat File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format gambar(png) ini tersedia untuk dilihat!';
        break;
        case "gif":
        download.innerHTML = 'Lihat File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File format gambar(gif) ini tersedia untuk dilihat!';
        break;
        default:
        download.innerHTML = 'Lihat File Penyelesaian Tugas';
        document.querySelector("#file-penyelesaian-tugas" + doc.id).innerHTML = 'File ini tersedia untuk dilihat/didownload!';
    }
    download.addEventListener('click', function(e) {
        let refPenyimpanan = firebase.storage().ref('Tugas ' + doc.id + ' ' + tanggalLuncur.replace(/\//g,'-') + ' ' + namaPeserta +  '/');
        let ambilPenyimpanan = refPenyimpanan.child(filePenyelesaian);
        ambilPenyimpanan.getDownloadURL().then(function(url){
            switch(ekstensi){
                case "docx":
                window.location.href = url;
                break;
                case "xls":
                window.location.href = url;
                break;
                case "pptx":
                window.location.href = url;
                break;
                case "pdf":
                window.open(url);
                break;
                case "txt":
                window.open(url);
                break;
                case "jpg":
                window.open(url);
                break;
                case "jpeg":
                window.open(url);
                break;
                case "png":
                window.open(url);
                break;
                case "gif":
                window.open(url);
                break;
                default:
                window.location.href = url;
                }
            })
        })
    }

    let hapus = document.querySelector('#hapustugasselesai' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus tugas(selesai) ini?');
        if(konfirmasi == true){
            let konfirmasiKedua = confirm('Menghapus tugas ini akan mempengaruhi performa karyawan individu dan hilangnya file penyelesaian tugas tersebut. Lanjutkan proses?');
            if(konfirmasiKedua == true){
        db.collection('tugasSelesai').doc(doc.id).delete();
        document.querySelector('#waktu-penyelesaian-' + doc.id).remove();
        $('#modaltugasselesai' + doc.id).modal('hide');
        let refPenyimpanan = firebase.storage().ref('Tugas ' + doc.id + ' ' + tanggalLuncur.replace(/\//g,'-') + ' ' + namaPeserta +  '/');
        let ambilPenyimpanan = refPenyimpanan.child(filePenyelesaian);
        ambilPenyimpanan.delete();
            }
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


let performaPeserta = document.querySelectorAll('.waktu-penyelesaian-' + namaPeserta.toLowerCase().replace(/\s/g, "-"));
let sum=0;
for (let i=0;i<performaPeserta.length;i++) {
    sum=sum + parseFloat(performaPeserta[i].childNodes[0].nodeValue);
}
let rataRataPenyelesaian = sum/performaPeserta.length;
let rataRataWaktuPenyelesaian;
            if(rataRataPenyelesaian > 604800000){
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
            } else if(rataRataPenyelesaian == 604800000){
                let perhitunganMinggu = Math.floor(rataRataPenyelesaian/604800000) + ' Minggu ';
                rataRataWaktuPenyelesaian = perhitunganMinggu;
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
            } else if(rataRataPenyelesaian == 86400000){
                let perhitunganHari = Math.floor(rataRataPenyelesaian/86400000) + ' Hari';
                rataRataWaktuPenyelesaian = perhitunganHari;
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
            } else if(rataRataPenyelesaian == 3600000){
                let perhitunganJam = Math.floor(rataRataPenyelesaian/3600000) + ' Jam ';
                rataRataWaktuPenyelesaian = perhitunganJam;
            } else if(rataRataPenyelesaian > 60000){
                let perhitunganMenit = Math.floor(rataRataPenyelesaian/60000) + ' Menit ';
                let perhitunganDetik = Math.floor((rataRataPenyelesaian%60000)/1000) + ' Detik'
                if(perhitunganDetik == '0 Detik'){
                    perhitunganDetik = '';
                }
                rataRataWaktuPenyelesaian = perhitunganMenit + perhitunganDetik;
            } else if(rataRataPenyelesaian == 60000){
                let perhitunganMenit = Math.floor(rataRataPenyelesaian/60000) + ' Menit ';
                rataRataWaktuPenyelesaian = perhitunganMenit;
            } else if(rataRataPenyelesaian < 60000){
                let perhitunganDetik = Math.floor(rataRataPenyelesaian/1000) + ' Detik';
                rataRataWaktuPenyelesaian = perhitunganDetik;
            }

let tampilanPerforma = document.querySelectorAll('.performa-peserta-' + namaPeserta.toLowerCase().replace(/\s/g, "-"));
for(let x = 0;x<tampilanPerforma.length;x++){
    tampilanPerforma[x].innerHTML = rataRataWaktuPenyelesaian;
}
    let jumlahTugasTerlambat = document.querySelectorAll('.terlambat' + namaPeserta.toLowerCase().replace(/\s/g, "-")).length;
    let jumlahTugasSelesai = document.querySelectorAll('.tugasseseorangselesai' + namaPeserta.toLowerCase().replace(/\s/g, "-")).length;
    if(jumlahTugasTerlambat == 0){
    document.querySelector('#jumlah-tugas-selesai-peserta-' + namaPeserta.toLowerCase().replace(/\s/g, "-")).innerHTML = 'telah menyelesaikan ' + jumlahTugasSelesai + ' tugas';
    document.querySelector('#rata-rata-waktu-penyelesaian-peserta-' + namaPeserta.toLowerCase().replace(/\s/g, "-")).innerHTML = ' dengan rata-rata waktu penyelesaian ' + rataRataWaktuPenyelesaian;
    document.querySelector('#jumlah-tugas-terlambat-selesai-peserta-' + namaPeserta.toLowerCase().replace(/\s/g, "-")).innerHTML = ', tidak pernah terlambat menyelesaikan tugas.';
    } else if(jumlahTugasTerlambat != 0){
    document.querySelector('#jumlah-tugas-selesai-peserta-' + namaPeserta.toLowerCase().replace(/\s/g, "-")).innerHTML = 'telah menyelesaikan ' + jumlahTugasSelesai + ' tugas';
    document.querySelector('#rata-rata-waktu-penyelesaian-peserta-' + namaPeserta.toLowerCase().replace(/\s/g, "-")).innerHTML = ' dengan rata-rata waktu penyelesaian ' + rataRataWaktuPenyelesaian;
    document.querySelector('#jumlah-tugas-terlambat-selesai-peserta-' + namaPeserta.toLowerCase().replace(/\s/g, "-")).innerHTML = ', terlambat menyelesaikan ' + jumlahTugasTerlambat + ' tugas.';
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
    div.classList.add('dokumentasi-kesalahan-peserta' + doc.id, 'kesalahanseseorang', 'kesalahanseseorang' + nama.toLowerCase().replace(/\s/g, "-"));
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
            <div class="data-kesalahan">
            <div class="info-kesalahan">
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

    let jumlahKesalahan = document.querySelectorAll('.kesalahanseseorang' + nama.toLowerCase().replace(/\s/g, "-")).length;
    document.querySelector('#jumlah-kesalahan-peserta-' + nama.toLowerCase().replace(/\s/g, "-")).innerHTML = 'Memiliki kesalahan dengan jumlah keseluruhan ' + jumlahKesalahan;

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-kesalahan' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let tanggalUpdate = document.querySelector('#tanggal-kesalahan' + doc.id).value;
            let kontenKesalahanUpdate = document.querySelector('#konten-kesalahan' + doc.id).value;
            if(tanggalUpdate == 0){
            tanggalUpdate = new Date().getTime();
            }
            let tanggalUpdateBaru = new Date(tanggalUpdate);
            let hariBaru = String(tanggalUpdateBaru.getDate()).padStart(2, '0');
            let bulanBaru = String(tanggalUpdateBaru.getMonth() + 1).padStart(2, '0');
            let tahunBaru = tanggalUpdateBaru.getFullYear();
            tanggalUpdateBaru = tahunBaru + '-' + bulanBaru + '-' + hariBaru;
            let overviewCadangan;
            let tanggalSekarang = new Date();
            let hariSekarang = String(tanggalSekarang.getDate()).padStart(2, '0');
            let bulanSekarang = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
            let tahunSekarang = tanggalSekarang.getFullYear();
            tanggalSekarang = tahunSekarang + '-' + bulanSekarang + '-' + hariSekarang;
            if(new Date(tanggalSekarang) >= new Date(tanggalUpdateBaru)){
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
            db.collection('kesalahan').doc(doc.id).get().then(function(item) {
                let tanggalKesalahan = item.data().tanggal;
                let kontenKesalahan = item.data().kontenKesalahan;
                let penggunaKesalahan = item.data().nama;
                let tanggalBaru = new Date(tanggalKesalahan);
                let hariBaru = String(tanggalBaru.getDate()).padStart(2, '0');
                let bulanBaru = String(tanggalBaru.getMonth() + 1).padStart(2, '0');
                let tahunBaru = tanggalBaru.getFullYear();
                tanggalBaru = tahunBaru + '-' + bulanBaru + '-' + hariBaru;
                if(tanggalBaru == tanggalUpdateBaru && kontenKesalahan == kontenKesalahanUpdate.replace(/\n\r?/g, '<br/>')){
                    alert('Tidak ada perubahan yang terjadi pada kolom kolom berikut');
                } else if(tanggalBaru != tanggalUpdateBaru && kontenKesalahan != kontenKesalahanUpdate.replace(/\n\r?/g, '<br/>')){
                    overviewCadangan = `mengubah tanggal beserta konten suatu kesalahan <span class="pengguna-target-overview pengguna-target-overview-${penggunaKesalahan.toLowerCase().replace(/\s/g, "-")}">${penggunaKesalahan}</span>.`;
                        db.collection('kesalahan').doc(doc.id).update({
                        tanggal : tanggalUpdate,
                        kontenKesalahan : kontenKesalahanUpdate.replace(/\n\r?/g, '<br/>')
                    }).then(() => {
                        formEdit.style.display = "none";
                            db.collection('overview').add({
                                penggunaOverview : docs.data().username,
                                penggunaKesalahan : penggunaKesalahan,
                                waktuOverview : new Date().getTime(),
                                overview : 'update-mistake',
                                overviewCadangan : overviewCadangan
                            })
                        })
                } else if(tanggalBaru != tanggalUpdateBaru){
                    overviewCadangan = `mengubah tanggal suatu kesalahan <span class="pengguna-target-overview pengguna-target-overview-${penggunaKesalahan.toLowerCase().replace(/\s/g, "-")}">${penggunaKesalahan}</span>.`
                    db.collection('kesalahan').doc(doc.id).update({
                        tanggal : tanggalUpdate
                    }).then(() => {
                        formEdit.style.display = "none";
                            db.collection('overview').add({
                                penggunaOverview : docs.data().username,
                                penggunaKesalahan : penggunaKesalahan,
                                waktuOverview : new Date().getTime(),
                                overview : 'update-mistake',
                                overviewCadangan : overviewCadangan
                            })
                        })                    
                } else if(kontenKesalahan != kontenKesalahanUpdate.replace(/\n\r?/g, '<br/>')){
                    overviewCadangan = `mengubah konten suatu kesalahan <span class="pengguna-target-overview pengguna-target-overview-${penggunaKesalahan.toLowerCase().replace(/\s/g, "-")}">${penggunaKesalahan}</span>.`
                    db.collection('kesalahan').doc(doc.id).update({
                        kontenKesalahan : kontenKesalahanUpdate.replace(/\n\r?/g, '<br/>')
                    }).then(() => {
                        formEdit.style.display = "none";
                            db.collection('overview').add({
                                penggunaOverview : docs.data().username,
                                penggunaKesalahan : penggunaKesalahan,
                                waktuOverview : new Date().getTime(),
                                overview : 'update-mistake',
                                overviewCadangan : overviewCadangan
                            })
                        })                        
                    }
                })
            })
            } else {
                alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
            }
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus kesalahan ' + nama + ' ini?');
        if(konfirmasi == true){
        db.collection('kesalahan').doc(doc.id).get().then(function(item){
            let tanggalKesalahan = new Date(item.data().tanggal);
            let hariKesalahan = String(tanggalKesalahan.getDate()).padStart(2, '0');
            let bulanKesalahan = String(tanggalKesalahan.getMonth() + 1).padStart(2, '0');
            let tahunKesalahan = tanggalKesalahan.getFullYear();
            tanggalKesalahan = hariKesalahan + '/' + bulanKesalahan + '/' + tahunKesalahan;
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                penggunaKesalahan : item.data().nama,
                tanggalKesalahan : tanggalKesalahan,
                kontenKesalahan : item.data().kontenKesalahan,
                overview : 'delete-mistake'
                })
        db.collection('kesalahan').doc(doc.id).delete();
        $('#modalkesalahan' + doc.id).modal('hide');
            })
        })
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
const modalPencapaian = document.querySelector('#modal-edit-achievement');
const listPencapaianKedua = document.querySelector('#list-achievement-kedua');
function renderAchievement(doc){
    let tr = document.createElement('tr');
    let div = document.createElement('div');
    let achievement = document.createElement('div');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('data-toggle', 'modal');
    tr.setAttribute('data-target', '#modalachievement' + doc.id);
    tr.setAttribute('id','achievement' + doc.id);
    tr.classList.add('dokumentasi-pencapaian' + doc.id, 'pencapaian');
    div.classList.add('dokumentasi-pencapaian-kedua' + doc.id);
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
    <td style="font-weight:bold;vertical-align:middle;" id="tanggal-pencapaian-table${doc.id}">${tanggal}</td>
    <td id="konten-pencapaian-table${doc.id}" style="text-align:left !important;">${kontenPencapaian}</td>
    `

    div.innerHTML = `<div id="jumlah-data-achievement">Jumlah Achievement yang anda raih sampai saat ini sebanyak <span id="jumlah-achievement"></span>.</div>`

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
            <div class="data-achievement">
            <div class="info-achievement">
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
    if(!document.querySelector('#jumlah-data-achievement')){
        listPencapaianKedua.appendChild(div);
    }

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-achievement' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let tanggalUpdate = document.querySelector('#tanggal-pencapaian' + doc.id).value;
            let kontenPencapaianUpdate = document.querySelector('#konten-pencapaian' + doc.id).value;
            if(tanggalUpdate == 0){
            tanggalUpdate = new Date().getTime();
            }
            let tanggalUpdateBaru = new Date(tanggalUpdate);
            let hariBaru = String(tanggalUpdateBaru.getDate()).padStart(2, '0');
            let bulanBaru = String(tanggalUpdateBaru.getMonth() + 1).padStart(2, '0');
            let tahunBaru = tanggalUpdateBaru.getFullYear();
            tanggalUpdateBaru = tahunBaru + '-' + bulanBaru + '-' + hariBaru;
            let overviewCadangan;
            let tanggalSekarang = new Date();
            let hariSekarang = String(tanggalSekarang.getDate()).padStart(2, '0');
            let bulanSekarang = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
            let tahunSekarang = tanggalSekarang.getFullYear();
            tanggalSekarang = tahunSekarang + '-' + bulanSekarang + '-' + hariSekarang;
            if(new Date(tanggalSekarang) >= new Date(tanggalUpdateBaru)){
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
            db.collection('achievement').doc(doc.id).get().then(function(item) {
                tanggal = item.data().tanggal;
                kontenPencapaian = item.data().kontenPencapaian;
                let tanggalBaru = new Date(tanggal);
                let hariBaru = String(tanggalBaru.getDate()).padStart(2, '0');
                let bulanBaru = String(tanggalBaru.getMonth() + 1).padStart(2, '0');
                let tahunBaru = tanggalBaru.getFullYear();
                tanggalBaru = tahunBaru + '-' + bulanBaru + '-' + hariBaru;
                if(tanggalBaru == tanggalUpdateBaru && kontenPencapaian == kontenPencapaianUpdate.replace(/\n\r?/g, '<br/>')){
                    alert('Tidak ada perubahan yang terjadi pada kolom kolom berikut');
                } else if(tanggalBaru != tanggalUpdateBaru && kontenPencapaian != kontenPencapaianUpdate.replace(/\n\r?/g, '<br/>')){
                overviewCadangan = 'mengubah tanggal beserta konten suatu achievement.'
                    db.collection('achievement').doc(doc.id).update({
                        tanggal : tanggalUpdate,
                        kontenPencapaian : kontenPencapaianUpdate.replace(/\n\r?/g, '<br/>')
                    }).then(() => {
                        formEdit.style.display = "none";
                            db.collection('overview').add({
                                penggunaOverview : docs.data().username,
                                waktuOverview : new Date().getTime(),
                                overview : 'update-achievement',
                                overviewCadangan : overviewCadangan
                            })
                        })                   
                    } else if(tanggalBaru != tanggalUpdateBaru){
                    overviewCadangan = 'mengubah tanggal suatu achievement.'
                    db.collection('achievement').doc(doc.id).update({
                        tanggal : tanggalUpdate
                    }).then(() => {
                        formEdit.style.display = "none";
                            db.collection('overview').add({
                                penggunaOverview : docs.data().username,
                                waktuOverview : new Date().getTime(),
                                overview : 'update-achievement',
                                overviewCadangan : overviewCadangan
                            })
                        })
                    } else if(kontenPencapaian != kontenPencapaianUpdate.replace(/\n\r?/g, '<br/>')){
                    overviewCadangan = 'mengubah konten suatu achievement.'
                    db.collection('achievement').doc(doc.id).update({
                        kontenPencapaian : kontenPencapaianUpdate.replace(/\n\r?/g, '<br/>')
                    }).then(() => {
                        formEdit.style.display = "none";
                            db.collection('overview').add({
                                penggunaOverview : docs.data().username,
                                waktuOverview : new Date().getTime(),
                                overview : 'update-achievement',
                                overviewCadangan : overviewCadangan
                            })
                        })                        
                    }
                })
            })
            } else {
                alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
            }
        })
    })


    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus pencapaian ini?');
        if(konfirmasi == true){
        db.collection('achievement').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                tanggalPencapaian : item.data().tanggal,
                kontenPencapaian : item.data().kontenPencapaian,
                overview : 'delete-achievement'
                })
        }).then(() => {
            db.collection('achievement').doc(doc.id).delete();
            $('#modalachievement' + doc.id).modal('hide');
            })
        })
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

const modalPengumuman = document.querySelector('#modal-edit-pengumuman');
function renderPengumuman(doc){
    let div = document.createElement('div');
    let pengumuman = document.createElement('div');
    div.setAttribute('data-id', doc.id);
    div.setAttribute('data-toggle', 'modal');
    div.setAttribute('data-target', '#modalpengumuman' + doc.id);
    div.setAttribute('id','pengumuman' + doc.id);
    div.classList.add('dokumentasi-pengumuman' + doc.id, 'pengumuman');
    let judulPengumuman = doc.data().judulPengumuman;
    let kontenPengumuman = doc.data().kontenPengumuman;
    let pembuatPengumuman = doc.data().pembuatPengumuman;
    let tanggal = doc.data().tanggal;
    let tanggalSekarang = new Date().getTime();
    let perbandinganWaktu = tanggalSekarang - tanggal;
    let kalkulasiTanggal = new Date(tanggal);
    div.setAttribute('data-date', tanggal);
    let perbandinganBaru;
    if(perbandinganWaktu >= 31536000000){
        let perhitunganTahun = Math.floor(perbandinganWaktu/31536000000);
        perbandinganWaktu = perhitunganTahun + ' tahun yang lalu';
        perbandinganBaru = '';
    } else if(perbandinganWaktu >= 2629800000){
        let perhitunganBulan = Math.floor(perbandinganWaktu/2629800000);
        perbandinganWaktu = perhitunganBulan + ' bulan yang lalu';
        perbandinganBaru = '';
    } else if(perbandinganWaktu >= 604800000){
        let perhitunganMinggu = Math.floor(perbandinganWaktu/604800000);
        perbandinganWaktu = perhitunganMinggu + ' minggu yang lalu';
        perbandinganBaru = '';
    } else if(perbandinganWaktu >= 86400000){
        if(perbandinganWaktu > 259200000){
            perbandinganBaru = '';
        } else {
            perbandinganBaru = 'Baru';
        }
        let perhitunganHari = Math.floor(perbandinganWaktu/86400000);
        perbandinganWaktu = perhitunganHari + ' hari yang lalu'
    } else if(perbandinganWaktu >= 3600000){
        let perhitunganJam = Math.floor(perbandinganWaktu/3600000);
        perbandinganWaktu = perhitunganJam + ' jam yang lalu';
        perbandinganBaru = 'Baru';
    } else if(perbandinganWaktu >= 60000){
        let perhitunganMenit = Math.floor(perbandinganWaktu/60000);
        perbandinganWaktu = perhitunganMenit + ' menit yang lalu';
        perbandinganBaru = 'Baru';
    } else if(perbandinganWaktu < 60000){
        perbandinganWaktu = 'baru saja';
        perbandinganBaru = 'Baru';
    }

    div.innerHTML = `
    <div><span id="judul-pengumuman-tampilan${doc.id}" class="judul-pengumuman-tampilan">${judulPengumuman}</span> <span class="badge badge-success perbandingan-baru-pengumuman" id="perbandingan-baru${doc.id}">${perbandinganBaru}</span></div>
    <div id="konten-pengumuman-tampilan${doc.id}" class="konten-pengumuman-tampilan">${kontenPengumuman}</div>
    <div class="keterangan-pembuat-pengumuman"><small>Dibuat oleh <span class="nama-pembuat-pengumuman" id="nama-pembuat-pengumuman${doc.id}">${pembuatPengumuman}</span> <span class="waktu-pengumuman-dibuat" id="waktu-pengumuman-dibuat${doc.id}">${perbandinganWaktu}</span></small></div>
    `

    pengumuman.innerHTML = `
        <div class="modal fade" id="modalpengumuman${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Pengaturan Pengumuman</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                <div class="modal-body">
                  <div class="data-pengumuman">
                    <div class="info-pengumuman">
                    <div class="judul-pengumuman-body" id="judul-pengumuman-body${doc.id}">${judulPengumuman}</div>
                    <div class="konten-pengumuman-body" id="konten-pengumuman-body${doc.id}">${kontenPengumuman}</div>
                    </div>
                    <div id="edit${doc.id}" class="btn btn-warning edit editpengumuman">Edit Data Pengumuman</div>
                    <div id="hapus${doc.id}" class="btn btn-danger hapus hapuspengumuman">Hapus Data Pengumuman</div>
                  </div>
                  <form id="modal-pengumuman${doc.id}" class="modal-pengumuman">
                        <div class="form-group">
                          <label class="col-form-label">Judul Pengumuman</label>
                          <input type="text" value="${judulPengumuman}" class="form-control" id="judul-pengumuman${doc.id}" autocomplete="off" required>
                        </div>
                      <div class="form-group">
                        <label>Konten Pengumuman</label>
                      <textarea oninput="auto_grow(this)" class="form-control" id="konten-pengumuman${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenPengumuman.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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

    document.querySelector('#grid-jumbotron-pengumuman').parentNode.insertBefore(div, document.querySelector('#grid-jumbotron-pengumuman').nextSibling);
    modalPengumuman.appendChild(pengumuman);

    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        if(pembuatPengumuman == docs.data().username){
            document.querySelector('#nama-pembuat-pengumuman' + doc.id).innerHTML = 'anda';
            document.querySelector('#nama-pembuat-pengumuman' + doc.id).style.textDecoration = 'none';
            document.querySelector('#nama-pembuat-pengumuman' + doc.id).style.color = 'black';
        }
    })

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        let formEdit = document.querySelector('#modal-pengumuman' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let judulPengumumanUpdate = document.querySelector('#judul-pengumuman' + doc.id).value;
            let kontenPengumumanUpdate = document.querySelector('#konten-pengumuman' + doc.id).value;
            tanggal = new Date().getTime();
            let overviewCadangan;
            db.collection('pengumuman').doc(doc.id).get().then(function(item){
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
                judulPengumuman = item.data().judulPengumuman;
                kontenPengumuman = item.data().kontenPengumuman;
            if(judulPengumuman == judulPengumumanUpdate && kontenPengumuman == kontenPengumumanUpdate.replace(/\n\r?/g, '<br/>')){
                alert('Tidak ada perubahan yang terjadi pada kolom kolom berikut');
            } else if(judulPengumuman != judulPengumumanUpdate && kontenPengumuman != kontenPengumumanUpdate.replace(/\n\r?/g, '<br/>')){
                overviewCadangan = 'mengubah judul pengumuman "' + judulPengumuman + '" menjadi "' + judulPengumumanUpdate + '" beserta konten pengumumannya.';
                db.collection('pengumuman').doc(doc.id).update({
                judulPengumuman : judulPengumumanUpdate,
                kontenPengumuman : kontenPengumumanUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overview : 'update-announcement',
                        overviewCadangan : overviewCadangan
                    })
                })
            } else if(kontenPengumuman != kontenPengumumanUpdate.replace(/\n\r?/g, '<br/>')){
            overviewCadangan = 'mengubah konten pengumuman "' + judulPengumuman + '".';
            db.collection('pengumuman').doc(doc.id).update({
                kontenPengumuman : kontenPengumumanUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overview : 'update-announcement',
                        overviewCadangan : overviewCadangan
                    })                
                })
            } else if(judulPengumuman != judulPengumumanUpdate){
            overviewCadangan = 'mengubah judul pengumuman "' + judulPengumuman + '" menjadi "' + judulPengumumanUpdate + '".';
            db.collection('pengumuman').doc(doc.id).update({
                judulPengumuman : judulPengumumanUpdate,
            }).then(() => {
                formEdit.style.display = "none";
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overview : 'update-announcement',
                        overviewCadangan : overviewCadangan
                    })                
                })
                    }
                })
            })
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus pengumuman ini?');
        if(konfirmasi == true){
        db.collection('pengumuman').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                judulPengumuman : item.data().judulPengumuman,
                kontenPengumuman : item.data().kontenPengumuman,
                overview : 'delete-announcement'
                })
        }).then(() => {
        db.collection('pengumuman').doc(doc.id).delete();
        $('#modalpengumuman' + doc.id).modal('hide');
            })
    })
        }
    })

        $(document).ready(function() {
        db.collection('pengumuman').onSnapshot(snapshot =>{
        let items = $('.pengumuman').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
        })
        $.each(items, function(i, div) {
        document.querySelector('#grid-jumbotron-pengumuman').parentNode.insertBefore(div, document.querySelector('#grid-jumbotron-pengumuman').nextSibling);
        })
      })
    })

}

function renderUpdatePengumuman(doc){
    let judulPengumuman = doc.data().judulPengumuman;
    let kontenPengumuman = doc.data().kontenPengumuman;
    document.querySelector('#judul-pengumuman-tampilan' + doc.id).innerHTML = judulPengumuman;
    document.querySelector('#konten-pengumuman-tampilan' + doc.id).innerHTML = kontenPengumuman;
    document.querySelector('#judul-pengumuman-body' + doc.id).innerHTML = judulPengumuman;
    document.querySelector('#konten-pengumuman-body' + doc.id).innerHTML = kontenPengumuman;
}

const listOverview = document.querySelector('#list-overview');
const listInfoOverview = document.querySelector('#list-info-overview')
function renderOverview(doc){
    let div = document.createElement('div');
    let info = document.createElement('div');
    let penggunaOverview = doc.data().penggunaOverview;
    let waktuOverview = doc.data().waktuOverview;
    let overview = doc.data().overview;
    div.setAttribute('data-id', doc.id);
    div.setAttribute('id', 'overview' + doc.id);
    div.classList.add('overview');
    let waktuSekarang = new Date().getTime();
    let perbandinganWaktu = waktuSekarang - overview;
    let judulPengumuman;
    let kontenPengumuman;
    let overviewCadangan;
    let tanggalPencapaian;
    let kontenPencapaian;
    let analisisSwot;
    let kontenAnalisis;
    let penggunaKesalahan;
    let tanggalKesalahan;
    let kontenKesalahan;
    let penggunaTugas;
    let kontenTugas;
    let tanggalLuncurTugas;
    let tanggalDeadlineTugas;
    let pengguna;
    let namaKategoriMenu;
    let namaMenu;
    let linkMenu;
    let namaEkspedisiCetakLabel;
    let pembuatCatatan;
    let kontenCatatan;
    let kontenIndent;
    let produkIndent;
    let namaCustomer;
    let kontakCustomer;
    let tanggalPerpindahan;
    let kontenPerpindahan;
    let tenor;
    let biayaAdmin;
    let bunga;
    let kalkulasiTanggal;
    let dd;
    let bulan;
    let mm;
    let yyyy;
    let produkRetur;
    let keluhanCustomer;
    let keteranganRetur;
    let statusProduk;
    let namaDealer;
    div.setAttribute('data-date', waktuOverview);
    if(perbandinganWaktu >= 31536000000){
        let perhitunganTahun = Math.floor(perbandinganWaktu/31536000000);
        perbandinganWaktu = 'pada ' + perhitunganTahun + ' tahun yang lalu';
    } else if(perbandinganWaktu >= 2629800000){
        let perhitunganBulan = Math.floor(perbandinganWaktu/2629800000);
        perbandinganWaktu = 'pada ' + perhitunganBulan + ' bulan yang lalu';
    } else if(perbandinganWaktu >= 604800000){
        let perhitunganMinggu = Math.floor(perbandinganWaktu/604800000);
        perbandinganWaktu = 'pada ' + perhitunganMinggu + ' minggu yang lalu';
    } else if(perbandinganWaktu >= 86400000){
        let perhitunganHari = Math.floor(perbandinganWaktu/86400000);
        perbandinganWaktu = 'pada ' + perhitunganHari + ' hari yang lalu';
    } else if(perbandinganWaktu >= 3600000){
        let perhitunganJam = Math.floor(perbandinganWaktu/3600000);
        perbandinganWaktu = 'pada ' + perhitunganJam + ' jam yang lalu';
    } else if(perbandinganWaktu >= 60000){
        let perhitunganMenit = Math.floor(perbandinganWaktu/60000);
        perbandinganWaktu = 'pada ' + perhitunganMenit + ' menit yang lalu';
    } else if(perbandinganWaktu < 60000){
        perbandinganWaktu = 'baru saja';
    }

    switch(overview){
        case 'sign-out':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> keluar dari website.`
        listOverview.appendChild(div);
        break;
        case 'sign-in':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> masuk kedalam website.`
        listOverview.appendChild(div);
        break;
        case 'sign-up':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> bergabung kedalam website.`
        listOverview.appendChild(div);
        break;
        case 'change-password':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> mengganti password akun.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-account':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus akun.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'update-announcement':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;        
        case 'add-announcement':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        judulPengumuman = doc.data().judulPengumuman;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan pengumuman "${judulPengumuman}".`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-announcement':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        judulPengumuman = doc.data().judulPengumuman;
        kontenPengumuman = doc.data().kontenPengumuman;
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus pengumuman "${judulPengumuman}".</div>`
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Pengumuman</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                <div class="modal-body">
                <div class="judul-pengumuman-body">${judulPengumuman}</div>
                <div class="konten-pengumuman-body">${kontenPengumuman}</div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white'
        break;        
        case 'add-achievement':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan suatu achievement.`
        listOverview.appendChild(div)
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-achievement':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        tanggalPencapaian = doc.data().tanggalPencapaian;
        kalkulasiTanggal = new Date(tanggalPencapaian);
        dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
        bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        mm = bulan[kalkulasiTanggal.getMonth()]
        yyyy = kalkulasiTanggal.getFullYear();
        tanggalPencapaian = dd + ' ' + mm + ' ' + yyyy;
        kontenPencapaian = doc.data().kontenPencapaian;
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus suatu achievement.</div>`
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Achievement</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-achievement">
                            <div>Tanggal</div>
                            <div>:</div>
                            <div style="font-weight:bold;">${tanggalPencapaian}</div>
                            <div>Konten Achievement</div>
                            <div>:</div> 
                            <div>${kontenPencapaian}</div>
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'update-achievement':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;        
        case 'add-swot':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        analisisSwot = doc.data().analisisSwot;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan data analisa swot pada ${analisisSwot}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-swot':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        kontenAnalisis = doc.data().kontenAnalisis;
        analisisSwot = doc.data().analisisSwot;
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus data analisa swot pada ${analisisSwot}.</div>`
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Analisis Swot</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-analisis">
                            <div style="text-align:center;font-size:24px;font-weight:bold;">${analisisSwot}</div>
                            <div>${kontenAnalisis}</div>
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'update-swot':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-mistake':
        penggunaKesalahan = doc.data().penggunaKesalahan;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"), 'overview-' + penggunaKesalahan.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan data kesalahan pada karyawan ${penggunaKesalahan}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-mistake':
        penggunaKesalahan = doc.data().penggunaKesalahan;
        tanggalKesalahan = doc.data().tanggalKesalahan;
        kontenKesalahan = doc.data().kontenKesalahan;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"), 'overview-' + penggunaKesalahan.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus data kesalahan pada karyawan ${penggunaKesalahan}.</div>`
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Kesalahan ${penggunaKesalahan}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-kesalahan">
                        <div>Karyawan</div>
                        <div>:</div>
                        <div style="font-weight:bold;">${penggunaKesalahan.toUpperCase()}</div>
                        <div>Waktu Kejadian</div>
                        <div>:</div>        
                        <div style="font-weight:bold;">${tanggalKesalahan}</div>
                        <div>Konten Kesalahan</div>
                        <div>:</div> 
                        <div>${kontenKesalahan}</div>
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;       
        case 'update-mistake':
        penggunaKesalahan = doc.data().penggunaKesalahan;
        overviewCadangan = doc.data().overviewCadangan;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"), 'overview-' + penggunaKesalahan.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-task':
        penggunaTugas = doc.data().penggunaTugas;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"), 'overview-' + penggunaTugas.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan tugas kepada ${penggunaTugas}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;         
        case 'delete-task':
        penggunaTugas = doc.data().penggunaTugas;
        tanggalLuncurTugas = doc.data().tanggalLuncurTugas;
        tanggalDeadlineTugas = doc.data().tanggalDeadlineTugas;
        kontenTugas = doc.data().kontenTugas;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"), 'overview-' + penggunaTugas.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus tugas ${penggunaTugas}.</div>`
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Tugas ${tanggalLuncurTugas}, CC : ${penggunaTugas}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-tugas">
                        <div>CC</div>
                        <div>:</div>
                        <div style="font-weight:bold;">${penggunaTugas.toUpperCase()}</div>
                        <div>Waktu Peluncuran</div>
                        <div>:</div>        
                        <div style="font-weight:bold;">${tanggalLuncurTugas}</div>
                        <div>Waktu Deadline</div>
                        <div>:</div>        
                        <div style="font-weight:bold;">${tanggalDeadlineTugas}</div>
                        <div>Status</div>
                        <div>:</div> 
                        <div style="font-weight:bold;color:#c72424;">PENDING</div>
                        <div>Konten Tugas</div>
                        <div>:</div> 
                        <div>${kontenTugas}</div>
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'update-task':
        penggunaTugas = doc.data().penggunaTugas;
        overviewCadangan = doc.data().overviewCadangan;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"), 'overview-' + penggunaTugas.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-user':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        pengguna = doc.data().pengguna;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan data karyawan a.n ${pengguna}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-user':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        pengguna = doc.data().pengguna;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus data karyawan a.n ${pengguna}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'update-user':
        pengguna = doc.data().pengguna;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"), 'overview-' + pengguna.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-menu-category':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        namaKategoriMenu = doc.data().namaKategoriMenu;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan kategori menu ${namaKategoriMenu}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-menu-category':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        namaKategoriMenu = doc.data().namaKategoriMenu;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus kategori menu ${namaKategoriMenu}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'update-menu-category':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-menu':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        namaKategoriMenu = doc.data().namaKategoriMenu;
        namaMenu = doc.data().namaMenu;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan menu "${namaMenu}" pada kategori menu ${namaKategoriMenu}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-menu':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        namaKategoriMenu = doc.data().namaKategoriMenu;
        namaMenu = doc.data().namaMenu;
        linkMenu = doc.data().linkMenu;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus menu "<a style="text-decoration:none;color:#961515;" href="${linkMenu}" target="_blank">${namaMenu}</a>" pada kategori menu ${namaKategoriMenu}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'update-menu':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-print-label-expedition':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        namaEkspedisiCetakLabel = doc.data().namaEkspedisiCetakLabel;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan ekspedisi "${namaEkspedisiCetakLabel}" pada fitur cetak label.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-print-label-expedition':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        namaEkspedisiCetakLabel = doc.data().namaEkspedisiCetakLabel;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus ekspedisi "${namaEkspedisiCetakLabel}" dari fitur cetak label.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'update-print-label-expedition':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-note':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan suatu catatan.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-note':
        pembuatCatatan = doc.data().pembuatCatatan;
        kontenCatatan = doc.data().kontenCatatan;        
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"), 'overview-' + pembuatCatatan.toLowerCase().replace(/\s/g, "-"));        
        if(penggunaOverview.toLowerCase().replace(/\s/g, "-") == pembuatCatatan.toLowerCase().replace(/\s/g, "-")){
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus catatan milik anda.</div>`
        } else {
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus catatan milik ${pembuatCatatan}.</div>`    
        }
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Catatan <span style="font-weight:bold;">${pembuatCatatan}</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                      <div>${kontenCatatan}</div>
                    </div>
                </div>
              </div>
            </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';        
        break;
        case 'update-note':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-indent':
        namaCustomer = doc.data().namaCustomer;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan data indent cust "${namaCustomer}".`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-indent':
        kontenIndent = doc.data().kontenIndent;
        produkIndent = doc.data().produkIndent;
        namaCustomer = doc.data().namaCustomer;
        kontakCustomer = doc.data().kontakCustomer;        
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus data indent cust "${namaCustomer}".</div>`        
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Indent Cust ${namaCustomer}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-indent-cust">
                        <div>Nama Customer</div>
                        <div>:</div>
                        <div style="font-weight:bold;">${namaCustomer}</div>
                        <div>Kontak Customer</div>
                        <div>:</div>        
                        <div >${kontakCustomer}</div>
                        <div>Indent Produk</div>
                        <div>:</div>        
                        <div style="font-weight:bold;">${produkIndent}</div>
                        <div>Konten Indent</div>
                        <div>:</div> 
                        <div>${kontenIndent}</div>
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';        
        break;
        case 'update-indent':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-transport':
        tanggalPerpindahan = doc.data().tanggalPerpindahan;
        kalkulasiTanggal = new Date(tanggalPerpindahan);
        dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
        bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        mm = bulan[kalkulasiTanggal.getMonth()]
        yyyy = kalkulasiTanggal.getFullYear();
        tanggalPerpindahan = dd + ' ' + mm + ' ' + yyyy;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan data perpindahan barang untuk tanggal ${tanggalPerpindahan}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-transport':
        tanggalPerpindahan = doc.data().tanggalPerpindahan;
        kontenPerpindahan = doc.data().kontenPerpindahan;
        kalkulasiTanggal = new Date(tanggalPerpindahan);
        dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
        bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        mm = bulan[kalkulasiTanggal.getMonth()]
        yyyy = kalkulasiTanggal.getFullYear();
        tanggalPerpindahan = dd + ' ' + mm + ' ' + yyyy;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus data perpindahan ${tanggalPerpindahan}.</div>`        
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Perpindahan ${tanggalPerpindahan}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-perpindahan-barang">
                        <div>Tanggal Perpindahan</div>
                        <div>:</div>
                        <div>${tanggalPerpindahan}</div>
                        <div>Konten Perpindahan</div>
                        <div>:</div>        
                        <div>${kontenPerpindahan}</div>
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';        
        break;
        case 'update-transport':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-tenor-calculator':
        tenor = doc.data().tenor;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan tenor ${tenor} bulan pada konfigurasi kalkulator.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'delete-tenor-calculator':
        tenor = doc.data().tenor;
        biayaAdmin = doc.data().biayaAdmin;
        bunga = doc.data().bunga;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus tenor ${tenor} bulan pada konfigurasi Kalkulator.</div>`        
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Informasi Tenor</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-tenor">
                        <div>Tenor</div>
                        <div>:</div>
                        <div>${tenor} Bulan</div>
                        <div>Biaya Admin</div>
                        <div>:</div>        
                        <div>${"Rp " + Number(biayaAdmin).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"}</div>
                        <div>Biaya Bunga</div>
                        <div>:</div>        
                        <div>${bunga}%</div>                        
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';        
        break;
        case 'update-tenor-calculator':
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        overviewCadangan = doc.data().overviewCadangan;
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> ${overviewCadangan}`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#edaa37';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;
        case 'add-return':
        namaCustomer = doc.data().namaCustomer;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan data retur penjualan dengan nama customer ${namaCustomer}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;       
        case 'delete-return':
        namaCustomer = doc.data().namaCustomer;
        kontakCustomer = doc.data().kontakCustomer;
        produkRetur = doc.data().produkRetur;
        keluhanCustomer = doc.data().keluhanCustomer;
        keteranganRetur = doc.data().keteranganRetur;
        statusProduk = doc.data().statusProduk;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus data retur penjualan customer ${namaCustomer}.</div>`        
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Informasi Retur ${namaCustomer}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-retur">
                        <div>Nama Customer</div>
                        <div>:</div>
                        <div style="font-weight:bold;">${namaCustomer}</div>
                        <div>Kontak Customer</div>
                        <div>:</div>
                        <div>${kontakCustomer}</div>
                        <div>Status Return</div>
                        <div>:</div>
                        <div>${statusProduk}</div>
                        <div>Produk</div>
                        <div>:</div>
                        <div>${produkRetur}</div>
                        <div>Keluhan Customer</div>
                        <div>:</div>
                        <div>${keluhanCustomer}</div>
                        <div>Keterangan Tambahan</div>
                        <div>:</div>
                        <div>${keteranganRetur}</div>                                                                                                
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';        
        break;
        case 'add-return-dealer':
        namaDealer = doc.data().namaDealer;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));        
        div.innerHTML = `<span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menambahkan data retur pembelian dealer ${namaDealer}.`
        listOverview.appendChild(div);
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#25cf6f';
        document.querySelector('#overview' + doc.id).style.color = 'white';
        break;       
        case 'delete-return-dealer':
        namaDealer = doc.data().namaDealer;
        produkRetur = doc.data().produkRetur;
        keteranganRetur = doc.data().keteranganRetur;
        statusProduk = doc.data().statusProduk;
        div.classList.add('overview-' + penggunaOverview.toLowerCase().replace(/\s/g, "-"));
        div.innerHTML = `<div id="baca-info${doc.id}" data-toggle="modal" data-target="#modalinfo${doc.id}"><span style="font-weight:bold;" id="pengguna-overview${doc.id}">${penggunaOverview}</span> <span id="waktu-overview${doc.id}">${perbandinganWaktu}</span> menghapus data retur pembelian dealer ${namaDealer}.</div>`        
        listOverview.appendChild(div);
        info.innerHTML = `
        <div class="modal fade" id="modalinfo${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Informasi Retur ${namaDealer}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="info-retur">
                        <div>Nama Dealer</div>
                        <div>:</div>
                        <div style="font-weight:bold;">${namaDealer}</div>
                        <div>Status Return</div>
                        <div>:</div>
                        <div>${statusProduk}</div>
                        <div>Produk Return</div>
                        <div>:</div>
                        <div>${produkRetur}</div>
                        <div>Keterangan Tambahan</div>
                        <div>:</div>
                        <div>${keteranganRetur}</div>                                                                                                
                        </div>
                    </div>
                  </div>
               </div>
             </div>
        `
        listInfoOverview.appendChild(info);
        document.querySelector('#overview' + doc.id).style.cursor = 'pointer';        
        document.querySelector('#overview' + doc.id).style.backgroundColor = '#e35959';
        document.querySelector('#overview' + doc.id).style.color = 'white';        
        break;                
    }

    if(auth.currentUser != null){
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        if(document.querySelector('#pengguna-overview' + doc.id) == null){
            console.log = function(){}
        } else if(penggunaOverview == docs.data().username){
            document.querySelector('#pengguna-overview' + doc.id).innerHTML = 'Anda';
        }
    })
    }

    $(document).ready(function() {
    db.collection('overview').onSnapshot(snapshot =>{
    let items = $('#list-overview > .overview').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
    })
    let daftarOverview = $('#list-overview');
    $.each(items, function(i, div) {
    daftarOverview.append(div);
    })
  })
})

}

const listKategoriMenu = document.querySelector('#list-kategori-menu');
const modalMenu = document.querySelector('#modal-edit-menu');
function renderKategoriMenu(doc){
    let div = document.createElement('div');
    let menu = document.createElement('div');
    let modalTambahMenu = document.createElement('div');
    let modalKategoriMenu = document.createElement('div');
    let tanggal = doc.data().tanggal;
    let namaKategoriMenu = doc.data().namaKategoriMenu;
    div.setAttribute('data-id', doc.id);
    div.setAttribute('id', namaKategoriMenu.toLowerCase().replace(/\s/g, '-').replace(/&/g,'dan') + doc.id)
    div.setAttribute('data-date', tanggal);
    div.classList.add('dokumentasi-kategori-menu' + doc.id, 'induk-kategori-menu');
    menu.setAttribute('id', 'menu-' + namaKategoriMenu.toLowerCase().replace(/\s/g, '-').replace(/&/g,'dan') + doc.id)
    menu.classList.add('dokumentasi-kategori-isi-menu' + doc.id, 'kategori-isi-menu', 'collapse', 'hide')
    div.innerHTML = `<div class="kategori-menu"><span id="nama-kategori-menu-tampilan${doc.id}" class="nama-kategori-menu-tampilan">${namaKategoriMenu}</span><i class='fas fa-pen pull-right edit-kategori-menu' id='edit${doc.id}'></i><i class='fas fa-trash-alt pull-right hapus-kategori-menu' id="hapus${doc.id}"></i></div>`
    menu.innerHTML = `
<ul class="list-menu" id="list-menu${doc.id}"></ul>
<div class="btn btn-success tombol-tambah-menu" id="tombol-tambah-menu${doc.id}">Tambah Menu</div>    
    `
    modalKategoriMenu.innerHTML = `
    <div class="modal fade" id="modalkategorimenu${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pengaturan Kategori</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <form id="tambah-kategori-menu${doc.id}">
                    <div class="form-group">
                      <label class="col-form-label">Nama Kategori</label>
                      <input type="text" class="form-control" value="${namaKategoriMenu}" id="nama-kategori-menu${doc.id}" autocomplete="off" required>
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
    modalTambahMenu.innerHTML = `
    <div class="modal fade" id="modalmenu${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Menambahkan Menu</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <form id="tambah-menu${doc.id}">
                    <div class="form-group">
                      <label class="col-form-label">Nama Menu</label>
                      <input type="text" class="form-control" id="nama-menu${doc.id}" autocomplete="off" required>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Link Menu</label>
                      <input type="text" class="form-control" id="link-menu${doc.id}" autocomplete="off" required>
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
    listKategoriMenu.appendChild(div);
    document.getElementById(namaKategoriMenu.toLowerCase().replace(/\s/g, '-').replace(/&/g,'dan') + doc.id).insertBefore(menu, document.getElementById(namaKategoriMenu.toLowerCase().replace(/\s/g, '-').replace(/&/g, 'dan') + doc.id).nextSibling);
    modalMenu.appendChild(modalTambahMenu);
    modalMenu.appendChild(modalKategoriMenu);

    $('#' + namaKategoriMenu.toLowerCase().replace(/\s/g, '-').replace(/&/g,'dan') + doc.id).click(function(e){
        e.stopPropagation();
        $('#menu-' + namaKategoriMenu.toLowerCase().replace(/\s/g, '-').replace(/&/g,'dan') + doc.id).collapse('toggle');
    })

    let tombolTambahMenu = document.querySelector('#tombol-tambah-menu' + doc.id)
    tombolTambahMenu.addEventListener('click', function(e){
        e.stopPropagation();
        $('#modalmenu' + doc.id).modal('show');
    })

    let listMenu = document.querySelector('#list-menu' + doc.id);
    listMenu.addEventListener('click', function(e){
        e.stopPropagation();
    })

    let daftarMenu = document.querySelector('#tambah-menu' + doc.id);
    daftarMenu.addEventListener('submit', function(e){
        e.preventDefault();
        db.collection('kategoriMenu').doc(doc.id).get().then(function(item){
            namaKategoriMenu = item.data().namaKategoriMenu;
        db.collection('menu').add({
            tanggal : new Date().getTime(),
            namaMenu : daftarMenu['nama-menu' + doc.id].value,
            linkMenu : daftarMenu['link-menu' + doc.id].value,
            kategoriMenu : doc.id
            }) 
        }).then(() => {
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : new Date().getTime(),
                namaMenu : daftarMenu['nama-menu' + doc.id].value,
                namaKategoriMenu : namaKategoriMenu,
                overview : 'add-menu'
                })
            }).then(() => {
                $('#modalmenu' + doc.id).modal('hide');
                document.querySelector('#tambah-menu' + doc.id).reset();
            })
        })
    })


    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.stopPropagation();
        $('#modalkategorimenu' + doc.id).modal('show');
    })

        let formEdit = document.querySelector('#tambah-kategori-menu' + doc.id);
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let namaKategoriMenuUpdate = document.querySelector('#nama-kategori-menu' + doc.id).value;
            let tanggal = new Date().getTime()
            let overviewCadangan;
            db.collection('kategoriMenu').doc(doc.id).get().then(function(item){
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
                namaKategoriMenu = item.data().namaKategoriMenu;
            if(namaKategoriMenu == namaKategoriMenuUpdate){
                alert('Tidak ada perubahan yang terjadi pada kolom berikut');
            } else if(namaKategoriMenu != namaKategoriMenuUpdate){
                overviewCadangan = 'mengubah nama kategori menu "' + namaKategoriMenu + '" menjadi "' + namaKategoriMenuUpdate + '".';
                db.collection('kategoriMenu').doc(doc.id).update({
                    namaKategoriMenu : namaKategoriMenuUpdate,
            }).then(() => {
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overview : 'update-menu-category',
                        overviewCadangan : overviewCadangan
                        })
                    }).then(() => {
                        $('#modalkategorimenu' + doc.id).modal('hide');
                    })
                    }
                })
            })
        })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus kategori menu ini?');
        if(konfirmasi == true){
        db.collection('kategoriMenu').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                namaKategoriMenu : item.data().namaKategoriMenu,
                overview : 'delete-menu-category'
                })
        }).then(() => {
        db.collection('menu').get().then(function(querySnapshot){
            querySnapshot.docs.map((items) => {
                    if(items.data().kategoriMenu == item.id){
                        db.collection('menu').doc(items.id).delete();
                    }
                })
            })
        })
    }).then(() => {
        db.collection('kategoriMenu').doc(doc.id).delete();
    })
        }
    })

    $(document).ready(function() {
    db.collection('kategoriMenu').onSnapshot(snapshot =>{
    let items = $('#list-kategori-menu > .induk-kategori-menu').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
    })
    let daftarKategoriMenu = $('#list-kategori-menu');
    $.each(items, function(i, div) {
    daftarKategoriMenu.append(div);
    })
  })
})


}

function renderUpdateKategoriMenu(doc){
    let namaKategoriMenu = doc.data().namaKategoriMenu;
    document.querySelector('#nama-kategori-menu-tampilan' + doc.id).innerHTML = namaKategoriMenu;
}


function renderMenu(doc){
    let li = document.createElement('li');
    let menu = document.createElement('div');
    let tanggal = doc.data().tanggal;
    let namaMenu = doc.data().namaMenu;
    let linkMenu = doc.data().linkMenu;
    let kategoriMenu = doc.data().kategoriMenu;
    li.setAttribute('data-id', doc.id);
    li.setAttribute('id', 'menu' + doc.id);
    li.classList.add('dokumentasi-menu' + doc.id, 'data-menu');
    li.setAttribute('data-date', tanggal);
    li.innerHTML = `<a class="link-menu" id="link-menu-kedua${doc.id}" href="${linkMenu}" target="_blank">${namaMenu}</a><i class='fas fa-pen edit-menu' id='edit${doc.id}'></i><i class='fas fa-trash-alt hapus-menu' id="hapus${doc.id}"></i>`
    menu.innerHTML = `
    <div class="modal fade" id="modalmenu${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pengaturan Menu</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <form id="tambah-menu${doc.id}">
                    <div class="form-group">
                      <label class="col-form-label">Nama Menu</label>
                      <input type="text" value="${namaMenu}" class="form-control" id="nama-menu${doc.id}" autocomplete="off" required>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Link Menu</label>
                      <input type="text" value="${linkMenu}" class="form-control" id="link-menu${doc.id}" autocomplete="off" required>
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
    document.querySelector('#list-menu' + kategoriMenu).appendChild(li);
    modalMenu.appendChild(menu);

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.stopPropagation();
        $('#modalmenu' + doc.id).modal('show');
    })

        let formEdit = document.querySelector('#tambah-menu' + doc.id);
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let namaMenuUpdate = document.querySelector('#nama-menu' + doc.id).value;
            let linkMenuUpdate = document.querySelector('#link-menu' + doc.id).value;
            let tanggal = new Date().getTime()
            let overviewCadangan;
            db.collection('menu').doc(doc.id).get().then(function(item){
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
                namaMenu = item.data().namaMenu;
                linkMenu = item.data().linkMenu;
            if(namaMenu == namaMenuUpdate && linkMenu == linkMenuUpdate){
                alert('Tidak ada perubahan yang terjadi pada kolom kolom berikut');
            } else if(namaMenu != namaMenuUpdate && linkMenu != linkMenuUpdate){
                overviewCadangan = 'mengubah nama menu "' + namaMenu + '" menjadi "' + namaMenuUpdate + '" beserta link menu.';
                db.collection('menu').doc(doc.id).update({
                    namaMenu : namaMenuUpdate,
                    linkMenu : linkMenuUpdate
            }).then(() => {
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overview : 'update-menu',
                        overviewCadangan : overviewCadangan
                        })
                    }).then(() => {
                        $('#modalmenu' + doc.id).modal('hide');
                    })
            } else if(namaMenu != namaMenuUpdate){
                overviewCadangan = 'mengubah nama menu "' + namaMenu + '" menjadi "' + namaMenuUpdate + '".';
                db.collection('menu').doc(doc.id).update({
                    namaMenu : namaMenuUpdate
            }).then(() => {
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overview : 'update-menu',
                        overviewCadangan : overviewCadangan
                        })
                    }).then(() => {
                        $('#modalmenu' + doc.id).modal('hide');
                    })                
            } else if(linkMenu != linkMenuUpdate){
                overviewCadangan = 'mengubah link menu "' + namaMenu + '".';
                db.collection('menu').doc(doc.id).update({
                    linkMenu : linkMenuUpdate
            }).then(() => {
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overview : 'update-menu',
                        overviewCadangan : overviewCadangan
                        })
                    }).then(() => {
                        $('#modalmenu' + doc.id).modal('hide');
                    })
            }
                })
            })
        })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus menu ini?');
        if(konfirmasi == true){
        db.collection('menu').doc(doc.id).get().then(function(item){
        db.collection('kategoriMenu').doc(item.data().kategoriMenu).get().then(function(items){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                namaMenu : item.data().namaMenu,
                linkMenu : item.data().linkMenu,
                namaKategoriMenu : items.data().namaKategoriMenu,
                overview : 'delete-menu'
                })
        }).then(() => {
        db.collection('menu').doc(doc.id).delete();
        })
    })
        })
}
    })

    $(document).ready(function() {
    db.collection('menu').onSnapshot(snapshot =>{
    let items = $('#list-menu' + kategoriMenu + ' > .data-menu').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
    })
    let daftarMenu = $('#list-menu' + kategoriMenu);
    $.each(items, function(i, div) {
    daftarMenu.append(div);
    })
  })
})

}

function renderUpdateMenu(doc){
    let namaMenu = doc.data().namaMenu;
    let linkMenu = doc.data().linkMenu;
    document.querySelector('#link-menu-kedua' + doc.id).innerHTML = namaMenu;
    document.querySelector('#link-menu-kedua' + doc.id).removeAttribute('href');
    document.querySelector('#link-menu-kedua' + doc.id).setAttribute('href', linkMenu)
}

const listEkspedisiCetakLabel = document.querySelector('#list-ekspedisi-cetak-label')
const modalCetakLabel = document.querySelector('#modal-cetak-label')
function renderEkspedisiCetakLabel(doc){
    let div = document.createElement('div');
    let opsi = document.createElement('option');
    let opsiKedua = document.createElement('option');
    let ekspedisiCetakLabel = document.createElement('div');
    opsi.setAttribute('id', 'ekspedisicetaklabel' + doc.id);
    opsiKedua.setAttribute('id', 'ekspedisitransaksiberjalan' + doc.id);
    div.classList.add('dokumentasi-ekspedisi-cetak-label' + doc.id, 'ekspedisicetaklabel')
    div.setAttribute('data-id', doc.id);
    let namaEkspedisiCetakLabel = doc.data().namaEkspedisiCetakLabel;
    let tanggal = doc.data().tanggal;
    div.setAttribute('data-date', tanggal);
    opsi.setAttribute('data-date', tanggal);
    opsiKedua.setAttribute('data-date', tanggal);  
    div.innerHTML = `
    <div id="nama-ekspedisi-cetak-label-tampilan${doc.id}" class="nama-ekspedisi-cetak-label-tampilan">${namaEkspedisiCetakLabel}</div>
    <i class='fas fa-pen edit-ekspedisi-cetak-label' id='edit${doc.id}' data-target="#modalekspedisicetaklabel${doc.id}" data-toggle="modal"></i>
    <i class='fas fa-trash-alt hapus-ekspedisi-cetak-label' id="hapus${doc.id}"></i>
    `
    opsi.innerHTML = namaEkspedisiCetakLabel;
    opsiKedua.innerHTML = namaEkspedisiCetakLabel;

    ekspedisiCetakLabel.innerHTML = `
        <div class="modal fade" id="modalekspedisicetaklabel${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Pengaturan Ekspedisi</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                <div class="modal-body">
                  <form id="tambah-ekspedisi-cetak-label${doc.id}">
                        <div class="form-group">
                          <label class="col-form-label">Nama Ekspedisi</label>
                          <input type="text" class="form-control" value="${namaEkspedisiCetakLabel}" id="nama-ekspedisi-cetak-label${doc.id}" autocomplete="off" required>
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

    listEkspedisiCetakLabel.appendChild(div);
    if(!document.querySelector('#ekspedisicetaklabel' + doc.id)){
    document.querySelector('#ekspedisi-customer-cetak-label').options[0].parentNode.insertBefore(opsi, document.querySelector('#ekspedisi-customer-cetak-label').options[0].nextSibling);

    $(document).ready(function() {
    db.collection('ekspedisiCetakLabel').onSnapshot(snapshot =>{
    let items = $('#ekspedisi-customer-cetak-label > option').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
    })
    let daftarOpsiEkspedisiCetakLabel = $('#ekspedisi-customer-cetak-label');
    $.each(items, function(i, div) {
    daftarOpsiEkspedisiCetakLabel.append(div)
    })
  })
})   

    }
    document.querySelector('#ekspedisi-transaksi-berjalan').options[0].parentNode.insertBefore(opsiKedua, document.querySelector('#ekspedisi-transaksi-berjalan').options[0].nextSibling);

    $(document).ready(function() {
    db.collection('ekspedisiCetakLabel').onSnapshot(snapshot =>{
    let items = $('#ekspedisi-transaksi-berjalan > option').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
    })
    let daftarOpsiEkspedisiTransaksiBerjalan = $('#ekspedisi-transaksi-berjalan');
    $.each(items, function(i, div) {
    daftarOpsiEkspedisiTransaksiBerjalan.append(div)
    })
  })
})   

    modalCetakLabel.appendChild(ekspedisiCetakLabel);

    $(document).ready(function() {
    db.collection('ekspedisiCetakLabel').onSnapshot(snapshot =>{
    let items = $('#list-ekspedisi-cetak-label > .ekspedisicetaklabel').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
    })
    let daftarEkspedisiCetakLabel = $('#list-ekspedisi-cetak-label');
    $.each(items, function(i, div) {
    daftarEkspedisiCetakLabel.append(div);
    })
  })
})

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus ekspedisi ini?');
        if(konfirmasi == true){
        db.collection('ekspedisiCetakLabel').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                namaEkspedisiCetakLabel : item.data().namaEkspedisiCetakLabel,
                overview : 'delete-print-label-expedition'
                })
        }).then(() => {

            db.collection('ekspedisiCetakLabel').doc(doc.id).delete();
            })
        })
    }
})

        let formEdit = document.querySelector('#tambah-ekspedisi-cetak-label' + doc.id);
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let namaEkspedisiCetakLabelUpdate = document.querySelector('#nama-ekspedisi-cetak-label' + doc.id).value;
            let tanggal = new Date().getTime()
            let overviewCadangan;
            db.collection('ekspedisiCetakLabel').doc(doc.id).get().then(function(item){
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
                namaEkspedisiCetakLabel = item.data().namaEkspedisiCetakLabel;
            if(namaEkspedisiCetakLabel == namaEkspedisiCetakLabelUpdate){
                alert('Tidak ada perubahan yang terjadi pada kolom berikut');
            } else if(namaEkspedisiCetakLabel != namaEkspedisiCetakLabelUpdate){
                overviewCadangan = 'mengubah nama ekspedisi "' + namaEkspedisiCetakLabel + '" menjadi "' + namaEkspedisiCetakLabelUpdate + '".';
                db.collection('ekspedisiCetakLabel').doc(doc.id).update({
                    namaEkspedisiCetakLabel : namaEkspedisiCetakLabelUpdate
            }).then(() => {
                    db.collection('overview').add({
                        penggunaOverview : docs.data().username,
                        waktuOverview : tanggal,
                        overview : 'update-print-label-expedition',
                        overviewCadangan : overviewCadangan
                        })
                    }).then(() => {
                        $('#modalekspedisicetaklabel' + doc.id).modal('hide');
                    })
            } 
                })
            })
        })    

}

function renderUpdateEkspedisiCetakLabel(doc){
    let namaEkspedisiCetakLabel = doc.data().namaEkspedisiCetakLabel;
    document.querySelector('#nama-ekspedisi-cetak-label-tampilan' + doc.id).innerHTML = namaEkspedisiCetakLabel;
    document.querySelector('#ekspedisicetaklabel' + doc.id).innerHTML = namaEkspedisiCetakLabel;
    document.querySelector('#ekspedisitransaksiberjalan' + doc.id).innerHTML = namaEkspedisiCetakLabel;
}

const listCatatan = document.querySelector('#list-catatan');
const modalCatatan = document.querySelector('#modal-edit-catatan');
function renderCatatan(doc){
    let div = document.createElement('div');
    let catatan = document.createElement('div');
    let kontenCatatan = doc.data().kontenCatatan;
    let pembuatCatatan = doc.data().pembuatCatatan;
    let tanggal = doc.data().tanggal;
    let kalkulasiTanggal = new Date(tanggal);
    let tanggalSekarang = new Date().getTime();
    let perbandinganWaktu = tanggalSekarang - tanggal;
    div.setAttribute('data-date', tanggal);
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'catatan' + doc.id)
    div.classList.add('dokumentasi-catatan' + doc.id, 'catatan')
    let perbandinganBaru;
    if(perbandinganWaktu >= 31536000000){
        let perhitunganTahun = Math.floor(perbandinganWaktu/31536000000);
        perbandinganWaktu = 'Dibuat pada ' + perhitunganTahun + ' tahun yang lalu';
    } else if(perbandinganWaktu >= 2629800000){
        let perhitunganBulan = Math.floor(perbandinganWaktu/2629800000);
        perbandinganWaktu = 'Dibuat pada ' + perhitunganBulan + ' bulan yang lalu';
    } else if(perbandinganWaktu >= 604800000){
        let perhitunganMinggu = Math.floor(perbandinganWaktu/604800000);
        perbandinganWaktu = 'Dibuat pada ' + perhitunganMinggu + ' minggu yang lalu';
    } else if(perbandinganWaktu >= 86400000){
        let perhitunganHari = Math.floor(perbandinganWaktu/86400000);
        perbandinganWaktu = 'Dibuat pada ' + perhitunganHari + ' hari yang lalu'
    } else if(perbandinganWaktu >= 3600000){
        let perhitunganJam = Math.floor(perbandinganWaktu/3600000);
        perbandinganWaktu = 'Dibuat pada ' + perhitunganJam + ' jam yang lalu';
    } else if(perbandinganWaktu >= 60000){
        let perhitunganMenit = Math.floor(perbandinganWaktu/60000);
        perbandinganWaktu = 'Dibuat pada ' + perhitunganMenit + ' menit yang lalu';
    } else if(perbandinganWaktu < 60000){
        perbandinganWaktu = 'Dibuat baru saja';
    }
    div.innerHTML = `
<div class="header-catatan">
    <div class="header-catatan-kedua">
        <div class="nama-pembuat-catatan"><i class='fas fa-user-alt'></i> ${pembuatCatatan}</div>
        <div class="waktu-catatan-dibuat" id="waktu-luncur-catatan${doc.id}">${perbandinganWaktu}</div>
    </div>
    <div class="dropdown">        
        <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
        <div class="dropdown-menu menu-konfigurasi-catatan">
            <div class='edit-catatan dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalcatatan${doc.id}'><i class='fas fa-pen'></i> Edit</div>
            <div class='hapus-catatan dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
        </div>
    </div>
</div>
    <div class="konten-catatan-body" id='konten-catatan-body${doc.id}'>${kontenCatatan}</div>
    `

    catatan.innerHTML = `
<div class="modal fade" id="modalcatatan${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pengaturan Catatan</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
          <form id="tambah-catatan${doc.id}">
              <div class="form-group">
                <label>Konten Catatan</label>
              <textarea oninput="auto_grow(this)" class="form-control" id="konten-catatan${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenCatatan.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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

    listCatatan.appendChild(div);
    modalCatatan.appendChild(catatan);

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus catatan ini?');
        if(konfirmasi == true){
        db.collection('catatan').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                kontenCatatan : item.data().kontenCatatan,
                pembuatCatatan : item.data().pembuatCatatan,
                overview : 'delete-note'
                })
        }).then(() => {
            db.collection('catatan').doc(doc.id).delete();
            })
        })
    }
})

    let formEdit = document.querySelector('#tambah-catatan' + doc.id);
    formEdit.addEventListener('submit', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        let kontenCatatanUpdate = document.querySelector('#konten-catatan' + doc.id).value;
        let tanggal = new Date().getTime()
        let overviewCadangan;
        db.collection('catatan').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
            kontenCatatan = item.data().kontenCatatan;
        if(kontenCatatan == kontenCatatanUpdate.replace(/\n\r?/g, '<br/>')){
            alert('Tidak ada perubahan yang terjadi pada kolom berikut');
        } else if(kontenCatatan != kontenCatatanUpdate.replace(/\n\r?/g, '<br/>')){
            overviewCadangan = 'mengubah konten suatu catatan.';
            db.collection('catatan').doc(doc.id).update({
                kontenCatatan : kontenCatatanUpdate.replace(/\n\r?/g, '<br/>')
        }).then(() => {
                db.collection('overview').add({
                    penggunaOverview : docs.data().username,
                    waktuOverview : tanggal,
                    overview : 'update-note',
                    overviewCadangan : overviewCadangan
                    })
                }).then(() => {
                    $('#modalcatatan' + doc.id).modal('hide');
                })
        } 
            })
        })
    })    


    $(document).ready(function() {
    db.collection('catatan').onSnapshot(snapshot =>{
    let items = $('#list-catatan > .catatan').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
    })
    let daftarCatatan = $('#list-catatan');
    $.each(items, function(i, div) {
    daftarCatatan.append(div);
    })
  })
})

}

function renderUpdateCatatan(doc){
    let kontenCatatan = doc.data().kontenCatatan;
    document.querySelector('#konten-catatan-body' + doc.id).innerHTML = kontenCatatan;
}

const listIndentCust = document.querySelector('#list-indent-cust')
const modalIndentCust = document.querySelector('#modal-edit-indent-cust')
function renderIndent(doc){
    let div = document.createElement('div');
    let indent = document.createElement('div')
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'indent' + doc.id);
    div.setAttribute('data-target', '#modalindentcust' + doc.id)
    div.setAttribute('data-toggle', 'modal')
    div.classList.add('dokumentasi-indent' + doc.id, 'indent-cust')
    let tanggal = doc.data().tanggal;
    div.setAttribute('data-date', tanggal);    
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    let kontenIndent = doc.data().kontenIndent;
    let produkIndent = doc.data().produkIndent;
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let mm1 = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;

    div.innerHTML = `<div style="display:flex;font-weight:bold;color:powderblue;">Indent ${tanggal}</div>
    <div class="produk-indent-tampilan">
    <div>Produk</div>
    <div>:</div>
    <div id="produk-indent-tampilan${doc.id}">${produkIndent}</div>
    </div>
    `
    indent.innerHTML = `
<div class="modal fade" id="modalindentcust${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Indent Cust ${namaCustomer}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div class="data-indent-cust">
        <div class="info-indent-cust">
        <div>Nama Customer</div>
        <div>:</div>
        <div style="font-weight:bold;" id="nama-customer-indent-cust-body${doc.id}">${namaCustomer}</div>
        <div>Kontak Customer</div>
        <div>:</div>        
        <div id="kontak-customer-indent-cust-body${doc.id}">${kontakCustomer}</div>
        <div>Produk Indent</div>
        <div>:</div> 
        <div id="produk-indent-cust-body${doc.id}">${produkIndent}</div>
        <div>Konten Indent</div>
        <div>:</div> 
        <div id="konten-indent-cust-body${doc.id}">${kontenIndent}</div>
        </div>
        <div id="edit${doc.id}" class="btn btn-warning edit edit-indent-cust">Edit Data Indent Cust</div>
        <div id="hapus${doc.id}" class="btn btn-danger hapus hapus-indent-cust">Hapus Data Indent Cust</div>
      </div>
          <form id="modal-indent-cust${doc.id}" class="modal-indent-cust">
              <div class="form-group">
                <label class="col-form-label">Nama Customer</label>
                <input type="text" value="${namaCustomer}" class="form-control" id="nama-customer-indent-cust${doc.id}" autocomplete="off" required>
              </div>
              <div class="form-group">
                <label>Kontak Customer <small>(Note : Tidak wajib untuk diisi)</small></label>
                <input type="number" value="${kontakCustomer}" class="form-control your_class" id="kontak-customer-indent-cust${doc.id}" autocomplete="off" autocomplete="off" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength = "13">
              </div>
              <div class="form-group">
                <label>Produk Indent</label>
              <textarea oninput="auto_grow(this)" class="form-control" id="produk-indent-cust${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${produkIndent.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
              </div>              
              <div class="form-group">                            
                <label>Konten Indent <small>(Note : Tidak wajib untuk diisi)</small></label>
              <textarea oninput="auto_grow(this)" class="form-control" id="konten-indent-cust${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)">${kontenIndent.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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

    modalIndentCust.appendChild(indent);
    listIndentCust.appendChild(div);

    $(document).ready(function() {
    db.collection('indent').onSnapshot(snapshot =>{
    let items = $('#list-indent-cust > .indent-cust').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
    })
    let daftarIndentCust = $('#list-indent-cust');
    $.each(items, function(i, div) {
    daftarIndentCust.append(div);
    })
  })
})

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        e.preventDefault();
        let formEdit = document.querySelector('#modal-indent-cust' + doc.id);
        formEdit.style.display = "block";      
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            let kontenIndentUpdate = document.querySelector('#konten-indent-cust' + doc.id).value;
            let produkIndentUpdate = document.querySelector('#produk-indent-cust' + doc.id).value;
            let namaCustomerUpdate = document.querySelector('#nama-customer-indent-cust' + doc.id).value;
            let kontakCustomerUpdate = document.querySelector('#kontak-customer-indent-cust' + doc.id).value;
            let overviewCadangan;
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
            db.collection('indent').doc(doc.id).get().then(function(item) {
            kontenIndent = item.data().kontenIndent;            
            produkIndent = item.data().produkIndent;
            namaCustomer = item.data().namaCustomer;
            kontakCustomer = item.data().kontakCustomer;
            if(kontenIndent == kontenIndentUpdate.replace(/\n\r?/g, '<br/>') && produkIndent == produkIndentUpdate.replace(/\n\r?/g, '<br/>') && namaCustomer == namaCustomerUpdate && kontakCustomer == kontakCustomerUpdate){
                alert('Tidak ada perubahan yang terjadi pada kolom kolom berikut');                
            } else if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                    if(namaCustomer != namaCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta konten dan produk indent cust.';
                    } else if(kontakCustomer != kontakCustomerUpdate){
                        overviewCadangan = 'mengubah kontak customer, konten indent dan produk indent cust ' + namaCustomer + '.';
                    } else {
                        overviewCadangan = 'mengubah konten indent dan produk indent cust ' + namaCustomer + '.';
                    }
                } else if(namaCustomer != namaCustomerUpdate){
                    if(kontakCustomer != kontakCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan konten indent cust.';
                    } else if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta konten dan produk indent cust.';
                    } else {
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta konten indent cust.';
                    }
                } else if(kontakCustomer != kontakCustomerUpdate){
                    if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah kontak customer, konten indent dan produk indent cust ' + namaCustomer + '.';
                    } else if(namaCustomer != namaCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan konten indent cust.';
                    } else {
                        overviewCadangan = 'mengubah kontak customer dan konten indent cust ' + namaCustomer + '.';
                    }
                } else { 
                    overviewCadangan = 'mengubah konten indent cust ' + namaCustomer + '.';
                }
                    db.collection('indent').doc(doc.id).update({
                        kontenIndent : kontenIndentUpdate.replace(/\n\r?/g, '<br/>'),
                        produkIndent : produkIndentUpdate.replace(/\n\r?/g, '<br/>'),
                        namaCustomer : namaCustomerUpdate,
                        kontakCustomer : kontakCustomerUpdate
                    }).then(() =>{
                        formEdit.style.display = "none";
                        db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-indent',
                            overviewCadangan : overviewCadangan
                        })
                            })                   
            } else if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                    if(namaCustomer != namaCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta konten dan produk indent cust.';
                    } else if(kontakCustomer != kontakCustomerUpdate){
                        overviewCadangan = 'mengubah kontak customer, konten indent dan produk indent cust ' + namaCustomer + '.';
                    } else {
                        overviewCadangan = 'mengubah konten indent dan produk indent cust ' + namaCustomer + '.';
                    }                    
                } else if(namaCustomer != namaCustomerUpdate){
                    if(kontakCustomer != kontakCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan produk indent cust.';
                    } else if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta konten dan produk indent cust.';
                    } else {
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta produk indent cust.';
                    }
                } else if(kontakCustomer != kontakCustomerUpdate){
                    if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah kontak customer, konten indent dan produk indent cust ' + namaCustomer + '.';
                    } else if(namaCustomer != namaCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan produk indent cust.';
                    } else {
                        overviewCadangan = 'mengubah kontak customer dan produk indent cust ' + namaCustomer + '.';
                    }
                } else {
                    overviewCadangan = 'mengubah produk indent cust ' + namaCustomer + '.';
                }
                    db.collection('indent').doc(doc.id).update({
                        kontenIndent : kontenIndentUpdate.replace(/\n\r?/g, '<br/>'),
                        produkIndent : produkIndentUpdate.replace(/\n\r?/g, '<br/>'),
                        namaCustomer : namaCustomerUpdate,
                        kontakCustomer : kontakCustomerUpdate
                    }).then(() =>{
                        formEdit.style.display = "none";
                        db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-indent',
                            overviewCadangan : overviewCadangan
                        })
                            })                                
            } else if(namaCustomer != namaCustomerUpdate){
                if(kontakCustomer != kontakCustomerUpdate){
                    if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan konten indent cust.';
                    } else if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan produk indent cust.';
                    } else {
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak customer.';
                    } 
                } else if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                    if(kontakCustomer != kontakCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan produk indent cust.';
                    } else if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta konten dan produk indent cust.';
                    } else {
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta produk indent cust.';
                    }
                } else if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                    if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta konten dan produk indent cust.';
                    } else if(kontakCustomer != kontakCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan konten indent cust.';
                    } else {
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta konten indent cust.';
                    }                    
                } else {
                    overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '".';                    
                }
                    db.collection('indent').doc(doc.id).update({
                        kontenIndent : kontenIndentUpdate.replace(/\n\r?/g, '<br/>'),
                        produkIndent : produkIndentUpdate.replace(/\n\r?/g, '<br/>'),
                        namaCustomer : namaCustomerUpdate,
                        kontakCustomer : kontakCustomerUpdate
                    }).then(() =>{
                        formEdit.style.display = "none";
                        db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-indent',
                            overviewCadangan : overviewCadangan
                        })
                            })                                
            } else if(kontakCustomer != kontakCustomerUpdate){
                if(namaCustomer != namaCustomerUpdate){
                    if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan konten indent cust.';
                    } else if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan produk indent cust.';
                    } else {
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak customer.';
                    }
                } else if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                    if(namaCustomer != namaCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan produk indent cust.';
                    } else if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah kontak customer, konten indent dan produk indent cust ' + namaCustomer + '.';
                    } else {
                        overviewCadangan = 'mengubah kontak customer dan produk indent cust ' + namaCustomer + '.';
                    }
                } else if(kontenIndent != kontenIndentUpdate.replace(/\n\r?/g, '<br/>')){
                    if(produkIndent != produkIndentUpdate.replace(/\n\r?/g, '<br/>')){
                        overviewCadangan = 'mengubah kontak customer, konten indent dan produk indent cust ' + namaCustomer + '.';
                    } else if(namaCustomer != namaCustomerUpdate){
                        overviewCadangan = 'mengubah nama customer pada data indent cust "' + namaCustomer + '" menjadi "' + namaCustomerUpdate + '" beserta kontak dan konten indent cust.';
                    } else {
                        overviewCadangan = 'mengubah kontak customer dan konten indent cust ' + namaCustomer + '.';
                    }                    
                } else {
                    overviewCadangan = 'mengubah konten produk indent cust ' + namaCustomer + '.';
                }
                    db.collection('indent').doc(doc.id).update({
                        kontenIndent : kontenIndentUpdate.replace(/\n\r?/g, '<br/>'),
                        produkIndent : produkIndentUpdate.replace(/\n\r?/g, '<br/>'),
                        namaCustomer : namaCustomerUpdate,
                        kontakCustomer : kontakCustomerUpdate
                    }).then(() =>{
                        formEdit.style.display = "none";
                        db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-indent',
                            overviewCadangan : overviewCadangan
                        })
                            })                                
            }
            })
        })
    })
})


    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data indent cust ini?');
        if(konfirmasi == true){
        db.collection('indent').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                kontenIndent : item.data().kontenIndent,
                produkIndent : item.data().produkIndent,
                namaCustomer : item.data().namaCustomer,
                kontakCustomer : item.data().kontakCustomer,
                overview : 'delete-indent'
                })
        }).then(() => {
            db.collection('indent').doc(doc.id).delete();
            $('#modalindentcust' + doc.id).modal('hide')
            })
        })
    }
})

}

function renderUpdateIndent(doc){
    let kontenIndent = doc.data().kontenIndent;
    let produkIndent = doc.data().produkIndent;
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    document.querySelector('#konten-indent-cust-body' + doc.id).innerHTML = kontenIndent;
    document.querySelector('#produk-indent-cust-body' + doc.id).innerHTML = produkIndent;
    document.querySelector('#produk-indent-tampilan' + doc.id).innerHTML = produkIndent;
    document.querySelector('#nama-customer-indent-cust-body' + doc.id).innerHTML = namaCustomer;
    document.querySelector('#kontak-customer-indent-cust-body' + doc.id).innerHTML = kontakCustomer;
}

const listPerpindahanBarang = document.querySelector('#list-perpindahan-barang');
const listPerpindahanBarangPending = document.querySelector('#list-perpindahan-barang-pending');
const listPerpindahanBarangSelesai = document.querySelector('#list-perpindahan-barang-selesai');
const modalPerpindahanBarang = document.querySelector('#modal-edit-perpindahan-barang');
function renderPerpindahan(doc){
    let div = document.createElement('div')
    let perpindahan = document.createElement('div');
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'perpindahanbarang' + doc.id)
    div.classList.add('dokumentasi-perpindahan' + doc.id, 'perpindahan-barang');
    let tanggal = doc.data().tanggal;
    let kontenPerpindahan = doc.data().kontenPerpindahan;
    div.setAttribute('data-date', new Date(tanggal).getTime())
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    let mm1 = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let tampilanTanggal = yyyy + '-' + mm1 + '-' + dd;
    let tanggalPerpindahan = yyyy + mm1 + dd;
    dd = String(new Date().getDate()).padStart(2, '0');
    mm = String(new Date().getMonth() + 1).padStart(2, '0');
    yyyy = new Date().getFullYear();
    let tanggalSekarang = yyyy + mm + dd;
    div.innerHTML = `
    <div class="header-perpindahan-barang">
        <div class="judul-perpindahan-barang">Perpindahan <span id="tanggal-perpindahan-barang-tampilan${doc.id}">Tanggal ${tanggal}</span></div>
        <div class="dropdown">        
            <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
            <div class="dropdown-menu menu-konfigurasi-perpindahan-barang">
                <div class='selesai-perpindahan-barang dropdown-item' id="selesai${doc.id}"><i class='fas fa-check'></i> Selesai</div>
                <div class='copy-perpindahan-barang dropdown-item' id="copy${doc.id}"><i class='far fa-copy'></i> Copy</div>
                <div class='edit-perpindahan-barang dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalperpindahanbarang${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                <div class='hapus-perpindahan-barang dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
            </div>
        </div>
    </div>
    <div id="konten-perpindahan-barang-tampilan${doc.id}" class="konten-perpindahan-barang-tampilan">${kontenPerpindahan}</div>
    `

    perpindahan.innerHTML = `
    <div class="modal fade" id="modalperpindahanbarang${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pengaturan Data Perpindahan Barang</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <form id="tambah-perpindahan-barang${doc.id}">
                  <div class="form-group">
                    <label class="col-form-label">Tanggal Perpindahan <small>(Note :Tanggal akan otomatis mengikuti tanggal hari ini jika kolom dikosongkan)</small></label>
                    <input type="date" value="${tampilanTanggal}" class="form-control" id="tanggal-perpindahan-barang${doc.id}" autocomplete="off">
                  </div>
                  <div class="form-group">              
                    <label>Konten Perpindahan</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="konten-perpindahan-barang${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenPerpindahan.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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
    if(tanggalPerpindahan == tanggalSekarang){
        listPerpindahanBarang.appendChild(div);
        document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Hari Ini';
    } else {
        listPerpindahanBarangPending.appendChild(div);
    }
    modalPerpindahanBarang.appendChild(perpindahan);    

    let selesai = document.querySelector('#selesai' + doc.id);
    selesai.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menyelesaikan perpindahan barang ini?');
        if(konfirmasi == true){        
        db.collection('perpindahan').doc(doc.id).get().then(function(item){
        db.collection('perpindahanSelesai').add({
            tanggal : item.data().tanggal,
            kontenPerpindahan : item.data().kontenPerpindahan
            }).then(() => {
                db.collection('perpindahan').doc(doc.id).delete();
                $('#modalperpindahanbarang' + doc.id).modal('hide')
            })
        })
        }
    })

    let copy = document.querySelector("#copy" + doc.id);
    copy.addEventListener('click', function (e) {
    let range = document.getSelection().getRangeAt(0);
    range.selectNode(document.querySelector("#konten-perpindahan-barang-tampilan" + doc.id));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data perpindahan barang ini?');
        if(konfirmasi == true){
        db.collection('perpindahan').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                tanggalPerpindahan : item.data().tanggal,
                kontenPerpindahan : item.data().kontenPerpindahan,
                overview : 'delete-transport'
                })
        }).then(() => {
            db.collection('perpindahan').doc(doc.id).delete();
            $('#modalperpindahanbarang' + doc.id).modal('hide')
                })
            })
        }
    })

    let edit = document.querySelector('#tambah-perpindahan-barang' + doc.id);
    edit.addEventListener('submit', (e) =>{
        e.preventDefault();
        let tanggalUpdate = document.querySelector('#tanggal-perpindahan-barang' + doc.id).value;
        let kontenPerpindahanUpdate = document.querySelector('#konten-perpindahan-barang' + doc.id).value;
        let overviewCadangan;
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        db.collection('perpindahan').doc(doc.id).get().then(function(item) {
        tanggal = item.data().tanggal;
        kontenPerpindahan = item.data().kontenPerpindahan;
        if(new Date(tanggal).getTime() == new Date(tanggalUpdate).getTime() && kontenPerpindahan == kontenPerpindahanUpdate.replace(/\n\r?/g, '<br/>')){
            alert('Tidak ada perubahan pada kolom kolom berikut.');
        } else if(new Date(tanggal).getTime() != new Date(tanggalUpdate).getTime() && kontenPerpindahan != kontenPerpindahanUpdate.replace(/\n\r?/g, '<br/>')){
            db.collection('perpindahan').doc(doc.id).update({
                tanggal : tanggalUpdate,
                kontenPerpindahan : kontenPerpindahanUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() =>{
                overviewCadangan = 'mengubah tanggal dan konten suatu perpindahan barang.'            
                    db.collection('overview').add({
                    penggunaOverview : docs.data().username,
                    waktuOverview : new Date().getTime(),
                    overview : 'update-transport',
                    overviewCadangan : overviewCadangan
                    })
                $('#modalperpindahanbarang' + doc.id).modal('hide')
                })
        } else if(new Date(tanggal).getTime() != new Date(tanggalUpdate).getTime()){
            db.collection('perpindahan').doc(doc.id).update({
                tanggal : tanggalUpdate
            }).then(() =>{
                overviewCadangan = 'mengubah tanggal suatu perpindahan barang.'            
                    db.collection('overview').add({
                    penggunaOverview : docs.data().username,
                    waktuOverview : new Date().getTime(),
                    overview : 'update-transport',
                    overviewCadangan : overviewCadangan
                    })
                $('#modalperpindahanbarang' + doc.id).modal('hide')
                })        
        } else if(kontenPerpindahan != kontenPerpindahanUpdate.replace(/\n\r?/g, '<br/>')){
            db.collection('perpindahan').doc(doc.id).update({
                kontenPerpindahan : kontenPerpindahanUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() =>{
                overviewCadangan = 'mengubah konten dan konten suatu perpindahan barang.'            
                    db.collection('overview').add({
                    penggunaOverview : docs.data().username,
                    waktuOverview : new Date().getTime(),
                    overview : 'update-transport',
                    overviewCadangan : overviewCadangan
                    })
                $('#modalperpindahanbarang' + doc.id).modal('hide')
                })
        }
            })
        })
    })

        $(document).ready(function() {
        db.collection('perpindahan').onSnapshot(snapshot =>{
        let items = $('#list-perpindahan-barang > .perpindahan-barang').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })
        let daftarPerpindahanBarang = $('#list-perpindahan-barang');
        $.each(items, function(i, div) {
        daftarPerpindahanBarang.append(div);
        })
      })
    })

}

function renderUpdatePerpindahan(doc){
    let kontenPerpindahan = doc.data().kontenPerpindahan;
    document.querySelector('#konten-perpindahan-barang-tampilan' + doc.id).innerHTML = kontenPerpindahan;
}


function renderPerpindahanSelesai(doc){
    let div = document.createElement('div')
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'perpindahanbarang' + doc.id)
    div.classList.add('dokumentasi-perpindahan' + doc.id, 'perpindahan-barang');
    let tanggal = doc.data().tanggal;
    let kontenPerpindahan = doc.data().kontenPerpindahan;
    div.setAttribute('data-date', new Date(tanggal).getTime())
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    let mm1 = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let tampilanTanggal = yyyy + '-' + mm1 + '-' + dd;
    let tanggalPerpindahan = yyyy + mm1 + dd;
    dd = String(new Date().getDate()).padStart(2, '0');
    mm = String(new Date().getMonth() + 1).padStart(2, '0');
    yyyy = new Date().getFullYear();
    let tanggalSekarang = yyyy + mm + dd;
    div.innerHTML = `
    <div class="header-perpindahan-barang">
        <div class="judul-perpindahan-barang">Perpindahan <span id="tanggal-perpindahan-barang-tampilan${doc.id}">Tanggal ${tanggal}</span></div>
        <div class="dropdown">        
            <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
            <div class="dropdown-menu menu-konfigurasi-perpindahan-barang">
                <div class='hapus-perpindahan-barang dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
            </div>
        </div>
    </div>
    <div id="konten-perpindahan-barang-tampilan${doc.id}" class="konten-perpindahan-barang-tampilan">${kontenPerpindahan}</div>
    `    
    listPerpindahanBarangSelesai.appendChild(div);

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data perpindahan barang(selesai) ini?');
        if(konfirmasi == true){
        db.collection('perpindahanSelesai').doc(doc.id).delete();
        }
    })

        $(document).ready(function() {
        db.collection('perpindahan').onSnapshot(snapshot =>{
        let items = $('#list-perpindahan-barang-selesai > .perpindahan-barang').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })
        let daftarPerpindahanBarangSelesai = $('#list-perpindahan-barang-selesai');
        $.each(items, function(i, div) {
        daftarPerpindahanBarangSelesai.append(div);
        })
      })
    })

}

const modalTenor = document.querySelector('#modal-edit-tenor');
function renderTenorKalkulator(doc){
    let div = document.createElement('div');
    let tenorKalkulator = document.createElement('div');
    div.setAttribute('data-id', doc.id);
    div.setAttribute('id', 'tenor' + doc.id)
    div.classList.add('dokumentasi-tenor-kalkulator' + doc.id, 'tombol-tenor-kalkulator', 'tenor-kalkulator')
    let tenor = doc.data().tenor;
    let biayaAdmin = doc.data().biayaAdmin;
    let bunga = doc.data().bunga;
    div.setAttribute('data-filter', tenor);
    div.innerHTML = `<div data-toggle="modal" data-target="#modaltenor${doc.id}" id="tenor-tampilan${doc.id}" class="tenor-tampilan">${tenor} Bulan</div><div id="hapus${doc.id}" class="hapustenor">x</div>`
    document.querySelector('#tombol-tambah-tenor-kalkulator').parentNode.insertBefore(div, document.querySelector('#tombol-tambah-tenor-kalkulator'))

    tenorKalkulator.innerHTML = `
<div class="modal fade" id="modaltenor${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pengaturan Tenor Kalkulator</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div class="data-tenor">
        <div class="info-tenor">
        <div>Tenor</div>
        <div>:</div>
        <div id="tenor-body${doc.id}">${tenor} Bulan</div>
        <div>Biaya Admin</div>
        <div>:</div>        
        <div id="biaya-admin-body${doc.id}">${"Rp " + Number(biayaAdmin).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"}</div>
        <div>Biaya Bunga</div>
        <div>:</div> 
        <div id="bunga-body${doc.id}">${bunga}%</div> 
        </div>
        <div id="edit${doc.id}" class="btn btn-warning edit edit-tenor">Edit Tenor</div>
        <div id="hapuskedua${doc.id}" class="btn btn-danger hapus hapus-tenor">Hapus Tenor</div>
        </div>
          <form id="modal-tenor${doc.id}" class="modal-tenor">
              <div class="form-group">
                <label class="col-form-label">Biaya Admin</label>
                <input type="number" value="${biayaAdmin}" class="form-control your_class" id="biaya-admin-tenor-kalkulator${doc.id}" autocomplete="off" autocomplete="off" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength = "13" required>
              </div>
              <div class="form-group">
                <label class="col-form-label">Bunga</label>
                <input type="text" value="${bunga}" class="form-control" id="bunga-tenor-kalkulator${doc.id}" autocomplete="off" maxlength = "4" required>
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

    modalTenor.appendChild(tenorKalkulator)

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        let formEdit = document.querySelector('#modal-tenor' + doc.id);
        formEdit.style.display = "block";      
        formEdit.addEventListener('submit', function(e){
        e.preventDefault();
        let biayaAdminTenorKalkulatorUpdate = document.querySelector('#biaya-admin-tenor-kalkulator' + doc.id).value;
        let bungaTenorKalkulatorUpdate = document.querySelector('#bunga-tenor-kalkulator' + doc.id).value;
            db.collection('tenorKalkulator').doc(doc.id).get().then(function(item){
            db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
                tenor = item.data().tenor;
                biayaAdmin = item.data().biayaAdmin;
                bunga = item.data().bunga;
                if(biayaAdmin == biayaAdminTenorKalkulatorUpdate && bunga == bungaTenorKalkulatorUpdate){
                    alert('Tidak ada perubahan pada kolom kolom berikut.')
                } else if(biayaAdmin != biayaAdminTenorKalkulatorUpdate && bunga != bungaTenorKalkulatorUpdate){
                    db.collection('tenorKalkulator').doc(doc.id).update({
                        biayaAdmin : biayaAdminTenorKalkulatorUpdate,
                        bunga : bungaTenorKalkulatorUpdate
                    }).then(() =>{
                        overviewCadangan = `mengubah biaya admin dan bunga pada tenor ${tenor} bulan dari ${"Rp " + Number(biayaAdmin).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"} dan ${bunga}% menjadi ${biayaAdminTenorKalkulatorUpdate} dan ${bungaTenorKalkulatorUpdate}%.`            
                            db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-tenor-calculator',
                            overviewCadangan : overviewCadangan
                            })
                        $('#modaltenor' + doc.id).modal('hide')
                        })                    
                } else if(biayaAdmin != biayaAdminTenorKalkulatorUpdate){
                    db.collection('tenorKalkulator').doc(doc.id).update({
                        biayaAdmin : biayaAdminTenorKalkulatorUpdate
                    }).then(() =>{
                        overviewCadangan = `mengubah biaya admin pada tenor ${tenor} bulan dari ${"Rp " + Number(biayaAdmin).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"} menjadi ${biayaAdminTenorKalkulatorUpdate}.`            
                            db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-tenor-calculator',
                            overviewCadangan : overviewCadangan
                            })
                        $('#modaltenor' + doc.id).modal('hide')
                        })
                } else if(bunga != bungaTenorKalkulatorUpdate){
                    db.collection('tenorKalkulator').doc(doc.id).update({
                        bunga : bungaTenorKalkulatorUpdate
                    }).then(() =>{
                        overviewCadangan = `mengubah biaya bunga pada tenor ${tenor} bulan dari ${bunga}% menjadi ${bungaTenorKalkulatorUpdate}%.`            
                            db.collection('overview').add({
                            penggunaOverview : docs.data().username,
                            waktuOverview : new Date().getTime(),
                            overview : 'update-tenor-calculator',
                            overviewCadangan : overviewCadangan
                            })
                        $('#modaltenor' + doc.id).modal('hide')
                        })
                }
        })
    })
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus tenor ini?');
        if(konfirmasi == true){
        db.collection('tenorKalkulator').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                tenor : item.data().tenor,
                biayaAdmin : item.data().biayaAdmin,
                bunga : item.data().bunga,
                overview : 'delete-tenor-calculator'
                })
        }).then(() => {
            db.collection('tenorKalkulator').doc(doc.id).delete();
                })
            })
        }
    })

    let hapusKedua = document.querySelector('#hapuskedua' + doc.id);
    hapusKedua.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus tenor ini?');
        if(konfirmasi == true){
        db.collection('tenorKalkulator').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                tenor : item.data().tenor,
                biayaAdmin : item.data().biayaAdmin,
                bunga : item.data().bunga,
                overview : 'delete-tenor-calculator'
                })
        }).then(() => {
            db.collection('tenorKalkulator').doc(doc.id).delete();
            $('#modaltenor' + doc.id).modal('hide');
                })
            })
        }
    })

    $(document).ready(function() {
    db.collection('tenorKalkulator').onSnapshot(snapshot =>{
    let items = $('#list-tenor-kalkulator > .tenor-kalkulator').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('filter');
    let keyB = $(b).data('filter');
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
    })
    let daftarTenorKalkulator = $('#list-tenor-kalkulator');
    $.each(items, function(i, div) {
    document.querySelector('#tombol-tambah-tenor-kalkulator').parentNode.insertBefore(div, document.querySelector('#tombol-tambah-tenor-kalkulator'))
            })
        })
    })   
     
}

function renderUpdateTenorKalkulator(doc){
    let biayaAdmin = doc.data().biayaAdmin;
    let bunga = doc.data().bunga;
    document.querySelector('#biaya-admin-body' + doc.id).innerHTML = "Rp " + Number(biayaAdmin).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00";
    document.querySelector('#bunga-body' + doc.id).innerHTML = bunga + '%'
}

function renderBiayaAdminKalkulator(doc){
    let biayaAdmin = doc.data().biayaAdmin;
    document.querySelector('#biaya-admin-kalkulator').value = biayaAdmin;
    document.querySelector('#tampilan-biaya-admin-kalkulator').innerHTML = "Rp " + Number(biayaAdmin).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00";    
}

function renderUpdateBiayaAdminKalkulator(doc){
    let biayaAdmin = doc.data().biayaAdmin;
    document.querySelector('#biaya-admin-kalkulator').value = biayaAdmin;
    document.querySelector('#tampilan-biaya-admin-kalkulator').innerHTML = "Rp " + Number(biayaAdmin).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00";
}

function renderBiayaBungaKalkulator(doc){
    let biayaBunga = doc.data().biayaBunga;
    document.querySelector('#biaya-bunga-kalkulator').value = biayaBunga;
    document.querySelector('#tampilan-biaya-bunga-kalkulator').innerHTML = biayaBunga + '%';
}

function renderUpdateBiayaBungaKalkulator(doc){
    let biayaBunga = doc.data().biayaBunga;
    document.querySelector('#biaya-bunga-kalkulator').value = biayaBunga;
    document.querySelector('#tampilan-biaya-bunga-kalkulator').innerHTML = biayaBunga + '%';    
}

function renderAktivasiBiayaAdminKalkulator(doc){
    let aktivasi = doc.data().aktivasi;
    if(aktivasi == 'YA'){
        document.querySelector('#tombol-aktivasi-biaya-admin-kalkulator').checked = true;
    } else {
        document.querySelector('#tombol-aktivasi-biaya-admin-kalkulator').checked = false;
    }
}

function renderUpdateAktivasiBiayaAdminKalkulator(doc){
    let aktivasi = doc.data().aktivasi;
    if(aktivasi == 'YA'){
        document.querySelector('#tombol-aktivasi-biaya-admin-kalkulator').checked = true;
    } else {
        document.querySelector('#tombol-aktivasi-biaya-admin-kalkulator').checked = false;
    }
}

function renderAktivasiBiayaBungaKalkulator(doc){
    let aktivasi = doc.data().aktivasi;
    if(aktivasi == 'YA'){
        document.querySelector('#tombol-aktivasi-biaya-bunga-kalkulator').checked = true;
    } else {
        document.querySelector('#tombol-aktivasi-biaya-bunga-kalkulator').checked = false;
    }
}

function renderUpdateAktivasiBiayaBungaKalkulator(doc){
    let aktivasi = doc.data().aktivasi;
    if(aktivasi == 'YA'){
        document.querySelector('#tombol-aktivasi-biaya-bunga-kalkulator').checked = true;
    } else {
        document.querySelector('#tombol-aktivasi-biaya-bunga-kalkulator').checked = false;
    }
}
const listTransaksiBerjalan = document.querySelector('#list-transaksi-berjalan');
const modalTransaksi = document.querySelector('#modal-edit-transaksi');
function renderTransaksiBerjalan(doc){
    let tr = document.createElement('tr');
    let transaksi = document.createElement('div');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('id', 'transaksi' + doc.id);
    tr.classList.add('dokumentasi-transaksi' + doc.id, 'transaksi-berjalan');
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    let alamatCustomer = doc.data().alamatCustomer;
    let nominalTransaksi = doc.data().nominalTransaksi;
    let ekspedisiTransaksi = doc.data().ekspedisiTransaksi;
    let produkTransaksi = doc.data().produkTransaksi;
    let keteranganTransaksi = doc.data().keteranganTransaksi;
    let tanggalTransaksi = doc.data().tanggalTransaksi;
    let kalkulasiTanggal = new Date(tanggalTransaksi);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggalTransaksi = dd + ' ' + mm + ' ' + yyyy;
    let mm1 = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let tampilanTanggal = yyyy + '-' + mm1 + '-' + dd;
    tr.setAttribute('data-date', new Date(yyyy + ',' + mm1 + ',' + dd).getTime())

    tr.innerHTML = `
    <td style="font-weight:bold;" id="tanggal-transaksi-table${doc.id}">${tanggalTransaksi}</td>
    <td id="nominal-transaksi-table${doc.id}">${"Rp " + Number(nominalTransaksi).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"}</td>
    <td id="produk-transaksi-table${doc.id}" class="produk-transaksi-table">${produkTransaksi}</td>
    <td id="keterangan-transaksi-table${doc.id}" class="keterangan-transaksi-table">${keteranganTransaksi}</td>
    <td><div data-target="#modaltransaksiberjalan${doc.id}" data-toggle="modal" class="btn btn-success lihat-transaksi-berjalan">View</div></td>
    `

    transaksi.innerHTML = `
<div class="modal fade" id="modaltransaksiberjalan${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pengaturan Data Transaksi Berjalan</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div class="data-transaksi">
        <div class="info-transaksi">
        <div>Tanggal Transaksi</div>
        <div>:</div> 
        <div id="tanggal-transaksi-body${doc.id}">${tanggalTransaksi}</div>
        <div>Nama Customer</div>
        <div>:</div>
        <div style="font-weight:bold;" id="customer-transaksi-body${doc.id}">${namaCustomer.toUpperCase()}</div>
        <div>Kontak Customer</div>
        <div>:</div>        
        <div style="font-weight:bold;" id="kontak-transaksi-body${doc.id}">${kontakCustomer}</div>
        <div>Alamat Customer</div>
        <div>:</div> 
        <div id="alamat-transaksi-body${doc.id}">${alamatCustomer}</div>
        <div>Ekspedisi Transaksi</div>
        <div>:</div> 
        <div id="ekspedisi-transaksi-body${doc.id}">${ekspedisiTransaksi}</div>        
        <div>Nominal Transaksi</div>
        <div>:</div> 
        <div id="nominal-transaksi-body${doc.id}">${"Rp " + Number(nominalTransaksi).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"}</div>
        <div>Produk</div>
        <div>:</div> 
        <div id="produk-transaksi-body${doc.id}">${produkTransaksi}</div>
        <div>Keterangan Transaksi</div>
        <div>:</div> 
        <div id="keterangan-transaksi-body${doc.id}">${keteranganTransaksi}</div> 
        </div>
        <div id="edit${doc.id}" class="btn btn-warning edit edit-transaksi-berjalan">Edit Data Transaksi</div>
        <div id="hapus${doc.id}" class="btn btn-danger hapus hapus-transaksi-berjalan">Hapus Data Transaksi</div>
        </div>
          <form id="modal-transaksi-berjalan${doc.id}" class="modal-transaksi-berjalan">
                <div class="form-group">
                  <label class="col-form-label">Tanggal Transaksi <small>(Note :Tanggal transaksi akan otomatis mengikuti tanggal hari ini jika kolom dikosongkan)</small></label>
                  <input type="date" value="${tampilanTanggal}" class="form-control" id="tanggal-transaksi-berjalan${doc.id}" autocomplete="off">
                </div>
                <div class="form-group">
                  <label class="col-form-label">Nama Customer</label>
                  <input type="text" value="${namaCustomer}" class="form-control your_class" id="customer-transaksi-berjalan${doc.id}" autocomplete="off">
                </div>
            <div class="form-row">
                <div class="form-group col-4">
                  <label class="col-form-label">Kontak Customer</label>
                  <input type="number" value="${kontakCustomer}" class="form-control your_class" id="kontak-transaksi-berjalan${doc.id}" autocomplete="off">
                </div>
                <div class="form-group col-4">
                  <label class="col-form-label">Nominal Transaksi</label>
                  <input type="number" value="${nominalTransaksi}" class="form-control your_class" id="nominal-transaksi-berjalan${doc.id}" autocomplete="off">
                </div>            
                <div class="form-group col-4">
                  <label class="col-form-label">Ekspedisi Transaksi</label>
                <select class="form-control ekspedisi-transaksi-berjalan" id="ekspedisi-transaksi-berjalan${doc.id}">
                    <option value="" disabled selected hidden>-</option>
                    </select>
                </div>                
            </div>
                <div class="form-group">
                  <label class="col-form-label">Alamat Customer</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="alamat-transaksi-berjalan${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off">${alamatCustomer.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>            
                <div class="form-group">
                  <label class="col-form-label">Produk</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="produk-transaksi-berjalan${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off">${produkTransaksi.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Keterangan Transaksi</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="keterangan-transaksi-berjalan${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off">${keteranganTransaksi.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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

    listTransaksiBerjalan.appendChild(tr);
    modalTransaksi.appendChild(transaksi);

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        let formEdit = document.querySelector('#modal-transaksi-berjalan' + doc.id);
        formEdit.style.display = "block";      
        formEdit.addEventListener('submit', function(e){
        e.preventDefault();
        let namaCustomerUpdate = document.querySelector('#customer-transaksi-berjalan' + doc.id).value;
        let kontakCustomerUpdate = document.querySelector('#kontak-transaksi-berjalan' + doc.id).value;
        let alamatCustomerUpdate = document.querySelector('#alamat-transaksi-berjalan' + doc.id).value;
        let nominalTransaksiUpdate = document.querySelector('#nominal-transaksi-berjalan' + doc.id).value;
        let ekspedisiTransaksiUpdate = document.querySelector('#ekspedisi-transaksi-berjalan' + doc.id).value;
        let produkTransaksiUpdate = document.querySelector('#produk-transaksi-berjalan' + doc.id).value;
        let keteranganTransaksiUpdate = document.querySelector('#keterangan-transaksi-berjalan' + doc.id).value;
        let tanggalTransaksiUpdate = document.querySelector('#tanggal-transaksi-berjalan' + doc.id).value;
        let tanggalSekarang = new Date();
        let hari = String(tanggalSekarang.getDate()).padStart(2, '0');
        let bulan = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
        let tahun = tanggalSekarang.getFullYear();
        tanggalSekarang = tahun + '-' + bulan + '-' + hari;
        if(tanggalTransaksiUpdate > tanggalSekarang){
            alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
        } else if(tanggalTransaksiUpdate == 0){
        db.collection('transaksiBerjalan').doc(doc.id).update({
            namaCustomer : namaCustomerUpdate,
            kontakCustomer : kontakCustomerUpdate,
            alamatCustomer : alamatCustomerUpdate.replace(/\n\r?/g, '<br/>'),
            nominalTransaksi : nominalTransaksiUpdate,
            ekspedisiTransaksi : ekspedisiTransaksiUpdate,
            produkTransaksi : produkTransaksiUpdate.replace(/\n\r?/g, '<br/>'),
            keteranganTransaksi : keteranganTransaksiUpdate.replace(/\n\r?/g, '<br/>'),
            tanggalTransaksi : new Date().getTime()
        })
        $('#modaltransaksiberjalan' + doc.id).modal('hide');
        } else {
        db.collection('transaksiBerjalan').doc(doc.id).update({
            namaCustomer : namaCustomerUpdate,
            kontakCustomer : kontakCustomerUpdate,
            alamatCustomer : alamatCustomerUpdate.replace(/\n\r?/g, '<br/>'),
            nominalTransaksi : nominalTransaksiUpdate,
            ekspedisiTransaksi : ekspedisiTransaksiUpdate,
            produkTransaksi : produkTransaksiUpdate.replace(/\n\r?/g, '<br/>'),
            keteranganTransaksi : keteranganTransaksiUpdate.replace(/\n\r?/g, '<br/>'),
            tanggalTransaksi : tanggalTransaksiUpdate
        })
        $('#modaltransaksiberjalan' + doc.id).modal('hide');            
        }
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus transaksi ini?');
        if(konfirmasi == true){
        db.collection('transaksiBerjalan').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                namaCustomer : item.data().namaCustomer,
                nominalTransaksi : item.data().nominalTransaksi,
                keteranganTransaksi : item.data().keteranganTransaksi,
                produk : item.data().produkTransaksi,
                overview : 'delete-transaction'
                })
        }).then(() => {
            db.collection('transaksiBerjalan').doc(doc.id).delete();
            $('#modaltransaksiberjalan' + doc.id).modal('hide');
            })
        })
    }
})

    $(document).ready(function() {
    db.collection('transaksiBerjalan').onSnapshot(snapshot =>{
    let items = $('#ekspedisi-transaksi-berjalan' + doc.id + ' > option').get();
    items.sort(function(a, b) {
    let keyA = $(a).data('date');
    let keyB = $(b).data('date');
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
    })
    let daftarOpsiEkspedisiCetakLabel = $('#ekspedisi-transaksi-berjalan' + doc.id);
    $.each(items, function(i, div) {
    daftarOpsiEkspedisiCetakLabel.append(div)
    })
  })
})

}

function renderUpdateTransaksiBerjalan(doc){
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    let alamatCustomer = doc.data().alamatCustomer;
    let nominalTransaksi = doc.data().nominalTransaksi;
    let ekspedisiTransaksi = doc.data().ekspedisiTransaksi;
    let produkTransaksi = doc.data().produkTransaksi;
    let keteranganTransaksi = doc.data().keteranganTransaksi;
    let tanggalTransaksi = doc.data().tanggalTransaksi;
    let kalkulasiTanggal = new Date(tanggalTransaksi);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggalTransaksi = dd + ' ' + mm + ' ' + yyyy;
    let mm1 = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let tampilanTanggal = yyyy + '-' + mm1 + '-' + dd;    
    document.querySelector('#customer-transaksi-body' + doc.id).innerHTML = namaCustomer;
    document.querySelector('#kontak-transaksi-body' + doc.id).innerHTML = kontakCustomer;
    document.querySelector('#alamat-transaksi-body' + doc.id).innerHTML = alamatCustomer;
    document.querySelector('#nominal-transaksi-table' + doc.id).innerHTML = "Rp " + Number(nominalTransaksi).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00";
    document.querySelector('#nominal-transaksi-body' + doc.id).innerHTML = "Rp " + Number(nominalTransaksi).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00";
    document.querySelector('#ekspedisi-transaksi-body' + doc.id).innerHTML = ekspedisiTransaksi;
    document.querySelector('#produk-transaksi-table' + doc.id).innerHTML = produkTransaksi;
    document.querySelector('#produk-transaksi-body' + doc.id).innerHTML = produkTransaksi;
    document.querySelector('#keterangan-transaksi-table' + doc.id).innerHTML = keteranganTransaksi;
    document.querySelector('#keterangan-transaksi-body' + doc.id).innerHTML = keteranganTransaksi;
    document.querySelector('#tanggal-transaksi-table' + doc.id).innerHTML = tanggalTransaksi;
    document.querySelector('#tanggal-transaksi-body' + doc.id).innerHTML = tanggalTransaksi;
    document.querySelector('#tanggal-transaksi-berjalan' + doc.id).value = tampilanTanggal;

}
const listReturPending = document.querySelector('#list-retur-pending');
const listReturSelesai = document.querySelector('#list-retur-selesai');
const modalRetur = document.querySelector('#modal-edit-retur')
function renderReturPending(doc){
    let div = document.createElement('div')
    let retur = document.createElement('div');
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'retur' + doc.id)
    div.classList.add('dokumentasi-retur' + doc.id, 'retur');
    let tanggal = doc.data().tanggal;
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    let produkRetur = doc.data().produkRetur;
    let keluhanCustomer = doc.data().keluhanCustomer;
    let keteranganRetur = doc.data().keteranganRetur;
    div.setAttribute('data-date', tanggal)
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    div.innerHTML = `
    <div class="header-retur">
        <div class="judul-retur"><i class='fas fa-history'></i> Return Customer ${tanggal}</div>
        <div class="dropdown">        
            <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
            <div class="dropdown-menu menu-konfigurasi-retur">
                <div class='edit-retur dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalretur${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                <div class='hapus-retur dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
            </div>
        </div>
    </div>
    <div id="konten-retur-tampilan${doc.id}" class="konten-retur-tampilan">
        <div>Nama Customer</div>
        <div>:</div>
        <div id="customer-retur-tampilan${doc.id}" style="font-weight:bold;">${namaCustomer}</div>
        <div>Kontak Customer</div>
        <div>:</div>
        <div id="kontak-retur-tampilan${doc.id}">${kontakCustomer}</div>
        <div>Produk Return</div>
        <div>:</div>
        <div id="produk-retur-tampilan${doc.id}">${produkRetur}</div>
        <div>Status Return</div>
        <div>:</div>
        <div style="color:#c72424;font-weight:bold;">Belum Selesai</div>
        <div>Keluhan Customer</div>
        <div>:</div>
        <div id="keluhan-retur-tampilan${doc.id}">${keluhanCustomer}</div>
        <div>Keterangan Tambahan</div>
        <div>:</div>
        <div id="keterangan-retur-tampilan${doc.id}">${keteranganRetur}</div>              
    </div>
    `

    retur.innerHTML = `
    <div class="modal fade" id="modalretur${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pengaturan Data Return</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <form id="tambah-retur${doc.id}">
                <div class="form-group">
                  <label class="col-form-label">Nama Customer</label>
                  <input type="text" value="${namaCustomer}" class="form-control" id="customer-retur${doc.id}" autocomplete="off" required>
                </div>
            <div class="form-row">
                <div class="form-group col-6">
                  <label class="col-form-label">Kontak Customer</label>
                  <input type="number" value="${kontakCustomer}" class="form-control your_class" id="kontak-retur${doc.id}" autocomplete="off">
                </div>            
                <div class="form-group col">
                  <label class="col-form-label">Status Return</label>
                <select class="form-control" id="status-retur${doc.id}" required>
                    <option>Sudah Selesai</option>
                    <option selected>Belum Selesai</option>
                    </select>
                </div>                
            </div>
                <div class="form-group">
                  <label class="col-form-label">Produk Return</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="produk-retur${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off" required>${produkRetur.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>            
                <div class="form-group">
                  <label class="col-form-label">Keluhan Customer</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="keluhan-retur${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off" required>${keluhanCustomer.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Keterangan Tambahan</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="keterangan-retur${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off">${keteranganRetur.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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

    listReturPending.appendChild(div);
    
    modalRetur.appendChild(retur);    

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data retur ini?');
        if(konfirmasi == true){
        db.collection('returPending').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                namaCustomer : item.data().namaCustomer,
                kontakCustomer : item.data().kontakCustomer,
                produkRetur : item.data().produkRetur,
                keluhanCustomer : item.data().keluhanCustomer,
                keteranganRetur : item.data().keteranganRetur,
                statusProduk : 'Belum Selesai',
                overview : 'delete-return'
                })
        }).then(() => {
            db.collection('returPending').doc(doc.id).delete();
            $('#modalretur' + doc.id).modal('hide')
                })
            })
        }
    })

    let edit = document.querySelector('#tambah-retur' + doc.id);
    edit.addEventListener('submit', (e) =>{
        e.preventDefault();
        let namaCustomerUpdate = document.querySelector('#customer-retur' + doc.id).value;
        let kontakCustomerUpdate = document.querySelector('#kontak-retur' + doc.id).value;
        let produkReturUpdate = document.querySelector('#produk-retur' + doc.id).value;
        let keluhanCustomerUpdate = document.querySelector('#keluhan-retur' + doc.id).value;
        let keteranganReturUpdate = document.querySelector('#keterangan-retur' + doc.id).value;
        let statusProdukUpdate = document.querySelector('#status-retur' + doc.id).value;
        let overviewCadangan;
        db.collection('returPending').doc(doc.id).get().then(function(item) {
        tanggal = item.data().tanggal;
        namaCustomer = item.data().namaCustomer;
        kontakCustomer = item.data().kontakCustomer;
        produkRetur = item.data().produkRetur;
        keluhanCustomer = item.data().keluhanCustomer;
        keteranganRetur = item.data().keteranganRetur;
        if(statusProdukUpdate == 'Sudah Selesai'){
            db.collection('returSelesai').add({
                tanggal : tanggal,
                namaCustomer : namaCustomerUpdate,
                kontakCustomer : kontakCustomerUpdate,
                produkRetur : produkReturUpdate.replace(/\n\r?/g, '<br/>'),
                keluhanCustomer : keluhanCustomerUpdate.replace(/\n\r?/g, '<br/>'),
                keteranganRetur : keteranganReturUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                db.collection('returPending').doc(doc.id).delete();
                $('#modalretur' + doc.id).modal('hide');
            })
        } else {
            db.collection('returPending').doc(doc.id).update({
                namaCustomer : namaCustomerUpdate,
                kontakCustomer : kontakCustomerUpdate,
                produkRetur : produkReturUpdate.replace(/\n\r?/g, '<br/>'),
                keluhanCustomer : keluhanCustomerUpdate.replace(/\n\r?/g, '<br/>'),
                keteranganRetur : keteranganReturUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                $('#modalretur' + doc.id).modal('hide');
            })
        }
            })
    })

        $(document).ready(function() {
        db.collection('returPending').onSnapshot(snapshot =>{
        let items = $('#list-retur-pending > .retur').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })
        let daftarReturPending = $('#list-retur-pending');
        $.each(items, function(i, div) {
        daftarReturPending.append(div);
        })
      })
    })


}

function renderUpdateReturPending(doc){
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    let produkRetur = doc.data().produkRetur;
    let keluhanCustomer = doc.data().keluhanCustomer;
    let keteranganRetur = doc.data().keteranganRetur;
    document.querySelector('#customer-retur-tampilan' + doc.id).innerHTML = namaCustomer;
    document.querySelector('#kontak-retur-tampilan' + doc.id).innerHTML = kontakCustomer;
    document.querySelector('#produk-retur-tampilan' + doc.id).innerHTML = produkRetur;
    document.querySelector('#keluhan-retur-tampilan' + doc.id).innerHTML = keluhanCustomer;
    document.querySelector('#keterangan-retur-tampilan' + doc.id).innerHTML = keteranganRetur;
}

function renderReturSelesai(doc){
    let div = document.createElement('div')
    let retur = document.createElement('div');
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'retur' + doc.id)
    div.classList.add('dokumentasi-retur' + doc.id, 'retur');
    let tanggal = doc.data().tanggal;
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    let produkRetur = doc.data().produkRetur;
    let keluhanCustomer = doc.data().keluhanCustomer;
    let keteranganRetur = doc.data().keteranganRetur;
    div.setAttribute('data-date', tanggal)
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    div.innerHTML = `
    <div class="header-retur">
        <div class="judul-retur"><i class='fas fa-pallet'></i> Return Customer ${tanggal}</div>
        <div class="dropdown">        
            <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
            <div class="dropdown-menu menu-konfigurasi-retur">
                <div class='edit-retur dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalretur${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                <div class='hapus-retur dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
            </div>
        </div>
    </div>
    <div id="konten-retur-tampilan${doc.id}" class="konten-retur-tampilan">
        <div>Nama Customer</div>
        <div>:</div>
        <div id="customer-retur-tampilan${doc.id}" style="font-weight:bold;">${namaCustomer}</div>
        <div>Kontak Customer</div>
        <div>:</div>
        <div id="kontak-retur-tampilan${doc.id}">${kontakCustomer}</div>
        <div>Produk Return</div>
        <div>:</div>
        <div id="produk-retur-tampilan${doc.id}">${produkRetur}</div>
        <div>Status Return</div>
        <div>:</div>
        <div style="color:#13eb5e;font-weight:bold;">Sudah Selesai</div>
        <div>Keluhan Customer</div>
        <div>:</div>
        <div id="keluhan-retur-tampilan${doc.id}">${keluhanCustomer}</div>
        <div>Keterangan Tambahan</div>
        <div>:</div>
        <div id="keterangan-retur-tampilan${doc.id}">${keteranganRetur}</div>              
    </div>
    `

    retur.innerHTML = `
    <div class="modal fade" id="modalretur${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pengaturan Data Return</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <form id="tambah-retur${doc.id}">
                <div class="form-group">
                  <label class="col-form-label">Nama Customer</label>
                  <input type="text" value="${namaCustomer}" class="form-control" id="customer-retur${doc.id}" autocomplete="off" required>
                </div>
            <div class="form-row">
                <div class="form-group col-6">
                  <label class="col-form-label">Kontak Customer</label>
                  <input type="number" value="${kontakCustomer}" class="form-control your_class" id="kontak-retur${doc.id}" autocomplete="off">
                </div>            
                <div class="form-group col">
                  <label class="col-form-label">Status Return</label>
                <select class="form-control" id="status-retur${doc.id}" required>
                    <option selected>Sudah Selesai</option>
                    <option>Belum Selesai</option>
                    </select>
                </div>                
            </div>
                <div class="form-group">
                  <label class="col-form-label">Produk Return</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="produk-retur${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off" required>${produkRetur.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>            
                <div class="form-group">
                  <label class="col-form-label">Keluhan Customer</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="keluhan-retur${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off" required>${keluhanCustomer.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Keterangan Tambahan</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="keterangan-retur${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off">${keteranganRetur.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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

    listReturSelesai.appendChild(div);
    
    modalRetur.appendChild(retur);    

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data retur ini?');
        if(konfirmasi == true){
        db.collection('returSelesai').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                namaCustomer : item.data().namaCustomer,
                kontakCustomer : item.data().kontakCustomer,
                produkRetur : item.data().produkRetur,
                keluhanCustomer : item.data().keluhanCustomer,
                keteranganRetur : item.data().keteranganRetur,
                statusProduk : 'Sudah Selesai',
                overview : 'delete-return'
                })
        }).then(() => {
            db.collection('returSelesai').doc(doc.id).delete();
            $('#modalretur' + doc.id).modal('hide')
                })
            })
        }
    })

    let edit = document.querySelector('#tambah-retur' + doc.id);
    edit.addEventListener('submit', (e) =>{
        e.preventDefault();
        let namaCustomerUpdate = document.querySelector('#customer-retur' + doc.id).value;
        let kontakCustomerUpdate = document.querySelector('#kontak-retur' + doc.id).value;
        let produkReturUpdate = document.querySelector('#produk-retur' + doc.id).value;
        let keluhanCustomerUpdate = document.querySelector('#keluhan-retur' + doc.id).value;
        let keteranganReturUpdate = document.querySelector('#keterangan-retur' + doc.id).value;
        let statusProdukUpdate = document.querySelector('#status-retur' + doc.id).value;
        let overviewCadangan;
        db.collection('returSelesai').doc(doc.id).get().then(function(item) {
        tanggal = item.data().tanggal;
        namaCustomer = item.data().namaCustomer;
        kontakCustomer = item.data().kontakCustomer;
        produkRetur = item.data().produkRetur;
        keluhanCustomer = item.data().keluhanCustomer;
        keteranganRetur = item.data().keteranganRetur;
        if(statusProdukUpdate == 'Belum Selesai'){
            db.collection('returPending').add({
                tanggal : tanggal,
                namaCustomer : namaCustomerUpdate,
                kontakCustomer : kontakCustomerUpdate,
                produkRetur : produkReturUpdate.replace(/\n\r?/g, '<br/>'),
                keluhanCustomer : keluhanCustomerUpdate.replace(/\n\r?/g, '<br/>'),
                keteranganRetur : keteranganReturUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                db.collection('returSelesai').doc(doc.id).delete();
                $('#modalretur' + doc.id).modal('hide');
            })
        } else {
            db.collection('returSelesai').doc(doc.id).update({
                namaCustomer : namaCustomerUpdate,
                kontakCustomer : kontakCustomerUpdate,
                produkRetur : produkReturUpdate.replace(/\n\r?/g, '<br/>'),
                keluhanCustomer : keluhanCustomerUpdate.replace(/\n\r?/g, '<br/>'),
                keteranganRetur : keteranganReturUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                $('#modalretur' + doc.id).modal('hide');
            })
        }
            })
    })

        $(document).ready(function() {
        db.collection('returSelesai').onSnapshot(snapshot =>{
        let items = $('#list-retur-selesai > .retur').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })
        let daftarReturSelesai = $('#list-retur-selesai');
        $.each(items, function(i, div) {
        daftarReturSelesai.append(div);
        })
      })
    })


}

function renderUpdateReturSelesai(doc){
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    let produkRetur = doc.data().produkRetur;
    let keluhanCustomer = doc.data().keluhanCustomer;
    let keteranganRetur = doc.data().keteranganRetur;
    document.querySelector('#customer-retur-tampilan' + doc.id).innerHTML = namaCustomer;
    document.querySelector('#kontak-retur-tampilan' + doc.id).innerHTML = kontakCustomer;
    document.querySelector('#produk-retur-tampilan' + doc.id).innerHTML = produkRetur;
    document.querySelector('#keluhan-retur-tampilan' + doc.id).innerHTML = keluhanCustomer;
    document.querySelector('#keterangan-retur-tampilan' + doc.id).innerHTML = keteranganRetur;
}

const listReturDealerPending = document.querySelector('#list-retur-dealer-pending');
const listReturDealerSelesai = document.querySelector('#list-retur-dealer-selesai');
const modalReturDealer = document.querySelector('#modal-edit-retur-dealer');
const previewPrintReturDealer = document.querySelector('#preview-print-retur-dealer');
function renderReturDealerPending(doc){
    let div = document.createElement('div')
    let retur = document.createElement('div');
    let previewPrint = document.createElement('div');
    previewPrint.setAttribute('id', 'print-retur' + doc.id);
    previewPrint.classList.add('preview-print-retur');
    div.setAttribute('data-id', doc.id);
    div.setAttribute('id', 'retur' + doc.id);
    div.classList.add('dokumentasi-retur' + doc.id, 'retur');
    let tanggal = doc.data().tanggal;
    let namaDealer = doc.data().namaDealer;
    let produkRetur = doc.data().produkRetur;
    let keteranganRetur = doc.data().keteranganRetur;
    div.setAttribute('data-date', tanggal)
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    let hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    dd = String(new Date().getDate()).padStart(2, '0');
    mm = bulan[new Date().getMonth()]
    yyyy = new Date().getFullYear();
    let tanggalSekarang = dd + ' ' + mm + ' ' + yyyy;
    div.innerHTML = `
    <div class="header-retur">
        <div class="judul-retur"><i class='fas fa-history'></i> Return Dealer ${tanggal}</div>
        <div class="dropdown">        
            <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
            <div class="dropdown-menu menu-konfigurasi-retur">
                <div class='print-retur dropdown-item' id='print${doc.id}'><i class="fa fa-print"></i> Print</div>
                <div class='edit-retur dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalreturdealer${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                <div class='hapus-retur dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
            </div>
        </div>
    </div>
    <div id="konten-retur-tampilan${doc.id}" class="konten-retur-tampilan">
        <div>Nama Dealer</div>
        <div>:</div>
        <div id="dealer-retur-tampilan${doc.id}" style="font-weight:bold;">${namaDealer}</div>
        <div>Status Return</div>
        <div>:</div>
        <div style="color:#c72424;font-weight:bold;">Belum Selesai</div>        
        <div>Produk Return</div>
        <div>:</div>
        <div id="produk-retur-dealer-tampilan${doc.id}">${produkRetur}</div>
        <div>Keterangan Tambahan</div>
        <div>:</div>
        <div id="keterangan-retur-dealer-tampilan${doc.id}">${keteranganRetur}</div>                      
    </div>
    `

    retur.innerHTML = `
    <div class="modal fade" id="modalreturdealer${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pengaturan Data Return</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <form id="tambah-retur-dealer${doc.id}">
                <div class="form-group">
                  <label class="col-form-label">Nama Dealer</label>
                  <input type="text" value="${namaDealer}" class="form-control" id="dealer-retur${doc.id}" autocomplete="off" required>
                </div> 
                <div class="form-group">
                  <label class="col-form-label">Status Return</label>
                <select class="form-control" id="status-retur-dealer${doc.id}" required>
                    <option>Sudah Selesai</option>
                    <option selected>Belum Selesai</option>
                    </select>
                </div>                
                <div class="form-group">
                  <label class="col-form-label">Produk Return</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="produk-retur-dealer${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off" required>${produkRetur.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Keterangan Tambahan</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="keterangan-retur-dealer${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off">${keteranganRetur.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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

    previewPrint.innerHTML = `
    <div class="header-surat">
      <div class="kop-surat"></div>
      <div class="isi-header-surat">
      <div class="nama-header-surat">PT GALAXY DIGITAL NIAGA</div>
      <div class="alamat-header-surat">Ruko Mall Metropolis Townsquare Block GM3 No.6, Cikokol, Tangerang</div>
      <div class="email-header-surat">E-mail : galaxycameraid@gmail.com</div>
      <div class="kontak-header-surat">Telp. 082111311131</div>
      </div>
    </div>
    <div class="sub-header-surat">
      <div style="display: grid;grid-template-columns: 50% 50%;">
        <div>Lampiran : 1 Berkas </div>
        <div style="text-align: right;">${hari[new Date().getDay()]}, ${tanggalSekarang}</div>
      </div>
      <div>Perihal : Pengembalian Barang</div>
    </div>
    <div class="body-surat">
      <div style="padding: 20px 0px;">
      <div>Yth,</div>
      <div id="dealer-retur-surat${doc.id}">${namaDealer}</div>
      </div>
      <div style="padding: 20px 0px;">Dengan hormat,</div>
      <div style="text-indent: 30px;">Pada hari ini, ${hari[new Date().getDay()]}, ${tanggalSekarang} di PT Galaxy DIGITAL NIAGA mengembalikan barang kepada saudara berupa :</div>      
      <div class="produk-retur-surat" id="produk-retur-surat${doc.id}">${produkRetur}</div>
      <div style="text-indent: 30px;padding:0px 10px 10px 10px;">Barang sudah kami cek dan dinyatakan dalam kondisi rusak atau tidak layak. Sehingga dengan adanya kasus ini, kami merasa kecewa karena barang tersebut tidak dapat dijual atau dipergunakan lagi dan mendapatkan kerugian terkait barang rusak tersebut.</div>
      <div style="text-indent: 30px;padding: 10px;">Berdasarkan hal diatas, dengan penuh kesungguhan kami meminta agar saudara mengganti barang tersebut dengan nilai barang yang ada.</div>
      <div style="text-indent: 30px;padding: 10px;">Demikian surat pengembalian barang ini kami buat dengan harapan adanya perbaikan kualitas barang, sehingga kedepannya tidak terjadi masalah yang sama. Atas perhatian dan kerjasamanya kami ucapkan terima kasih.</div>
    </div>
    <div class="footer-surat">
      <div class="footer-menyerahkan-surat">
        <div>Yang Menyerahkan</div>
        <div style="padding: 80px;"></div>
      </div>
      <div class="footer-menerima-surat">
        <div>Yang Menerima</div>
        <div style="padding: 80px;"></div>
      </div>
    </div>
    `

    listReturDealerPending.appendChild(div);
    
    modalReturDealer.appendChild(retur);    

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data retur ini?');
        if(konfirmasi == true){
        db.collection('returDealerPending').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                namaDealer : item.data().namaDealer,
                produkRetur : item.data().produkRetur,
                keteranganRetur : item.data().keteranganRetur,
                statusProduk : 'Belum Selesai',
                overview : 'delete-return-dealer'
                })
        }).then(() => {
            db.collection('returDealerPending').doc(doc.id).delete();
            $('#modalreturdealer' + doc.id).modal('hide')
                })
            })
        }
    })

    let print = document.querySelector('#print' + doc.id);
    print.addEventListener('click', (e) => {
        e.stopPropagation();
        previewPrintReturDealer.appendChild(previewPrint);
        db.collection('returDealerPending').doc(doc.id).get().then(function(item){
        document.querySelector('#dealer-retur-surat' + doc.id).innerHTML = item.data().namaDealer;
        document.querySelector('#produk-retur-surat' + doc.id).innerHTML = item.data().produkRetur;     
        }).then(() => {        
        document.body.style.visibility = 'hidden';
        previewPrintReturDealer.style.visibility = 'visible';
        document.body.style.setProperty("background-color", "white", "important");
        document.querySelector('#tombol-burger').style.visibility = 'hidden';
        previewPrintReturDealer.style.position = 'absolute';
        previewPrintReturDealer.style.width = '100%';
        previewPrintReturDealer.style.top = '0';
        previewPrintReturDealer.style.left = '0';
        document.querySelector('#myTabContent').style.marginLeft = '0';
        window.print();
        document.querySelector('#print-retur' + doc.id).remove();
        document.querySelector('#tombol-burger').style.visibility = 'visible';
        document.body.style.visibility = 'visible';
        document.querySelector('#preview-print-cetak-label').style.position = 'relative';
        document.body.style.setProperty("background-color", "#eeeeee", "important");
        setTimeout(function(){
        document.querySelector('#darken').style.backgroundColor = '0';
        document.querySelector('#darken').style.width = '0';
        document.querySelector('#darken').style.height = '0';
        document.querySelector('#darken').style.position = '0';
        document.querySelector('#darken').style.opacity = '0';
        document.querySelector('#darken').style.zIndex = '0';
        },0)
        })        
    })

    let edit = document.querySelector('#tambah-retur-dealer' + doc.id);
    edit.addEventListener('submit', (e) =>{
        e.preventDefault();
        let namaDealerUpdate = document.querySelector('#dealer-retur' + doc.id).value;
        let produkReturUpdate = document.querySelector('#produk-retur-dealer' + doc.id).value;
        let statusProdukUpdate = document.querySelector('#status-retur-dealer' + doc.id).value;
        let keteranganReturUpdate = document.querySelector('#keterangan-retur-dealer' + doc.id).value;
        let overviewCadangan;
        db.collection('returDealerPending').doc(doc.id).get().then(function(item) {
        tanggal = item.data().tanggal;
        namaDealer = item.data().namaDealer;
        produkRetur = item.data().produkRetur;
        keteranganRetur = item.data().keteranganRetur;
        if(statusProdukUpdate == 'Sudah Selesai'){
            db.collection('returDealerSelesai').add({
                tanggal : tanggal,
                namaDealer : namaDealerUpdate,
                produkRetur : produkReturUpdate.replace(/\n\r?/g, '<br/>'),
                keteranganRetur : keteranganReturUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                db.collection('returDealerPending').doc(doc.id).delete();
                $('#modalreturdealer' + doc.id).modal('hide');
            })
        } else {
            db.collection('returDealerPending').doc(doc.id).update({
                tanggal : tanggal,
                namaDealer : namaDealerUpdate,
                produkRetur : produkReturUpdate.replace(/\n\r?/g, '<br/>'),
                keteranganRetur : keteranganReturUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                $('#modalreturdealer' + doc.id).modal('hide');
            })
        }
            })
    })

        $(document).ready(function() {
        db.collection('returDealerPending').onSnapshot(snapshot =>{
        let items = $('#list-retur-dealer-pending > .retur').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })
        let daftarReturDealerPending = $('#list-retur-dealer-pending');
        $.each(items, function(i, div) {
        daftarReturDealerPending.append(div);
        })
      })
    })


}

function renderUpdateReturDealerPending(doc){
    let namaDealer = doc.data().namaDealer;
    let produkRetur = doc.data().produkRetur;
    let keteranganRetur = doc.data().keteranganRetur; 
    document.querySelector('#dealer-retur-tampilan' + doc.id).innerHTML = namaDealer;
    document.querySelector('#produk-retur-dealer-tampilan' + doc.id).innerHTML = produkRetur;
    document.querySelector('#keterangan-retur-dealer-tampilan' + doc.id).innerHTML = keteranganRetur;
}

function renderReturDealerSelesai(doc){
    let div = document.createElement('div')
    let retur = document.createElement('div');
    let previewPrint = document.createElement('div');
    previewPrint.setAttribute('id', 'print-retur' + doc.id);
    previewPrint.classList.add('preview-print-retur');
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'retur' + doc.id)
    div.classList.add('dokumentasi-retur' + doc.id, 'retur');
    let tanggal = doc.data().tanggal;
    let namaDealer = doc.data().namaDealer;
    let produkRetur = doc.data().produkRetur;
    let keteranganRetur = doc.data().keteranganRetur;    
    div.setAttribute('data-date', tanggal)
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    let hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    dd = String(new Date().getDate()).padStart(2, '0');
    mm = bulan[new Date().getMonth()]
    yyyy = new Date().getFullYear();
    let tanggalSekarang = dd + ' ' + mm + ' ' + yyyy;    
    div.innerHTML = `
    <div class="header-retur">
        <div class="judul-retur"><i class='fas fa-history'></i> Return Dealer ${tanggal}</div>
        <div class="dropdown">        
            <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
            <div class="dropdown-menu menu-konfigurasi-retur">
                <div class='print-retur dropdown-item' id='print${doc.id}'><i class="fa fa-print"></i> Print</div>
                <div class='edit-retur dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalreturdealer${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                <div class='hapus-retur dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
            </div>
        </div>
    </div>
    <div id="konten-retur-tampilan${doc.id}" class="konten-retur-tampilan">
        <div>Nama Dealer</div>
        <div>:</div>
        <div id="dealer-retur-tampilan${doc.id}" style="font-weight:bold;">${namaDealer}</div>
        <div>Status Return</div>
        <div>:</div>
        <div style="color:#13eb5e;font-weight:bold;">Sudah Selesai</div>        
        <div>Produk Return</div>
        <div>:</div>
        <div id="produk-retur-dealer-tampilan${doc.id}">${produkRetur}</div>
        <div>Keterangan Tambahan</div>
        <div>:</div>
        <div id="keterangan-retur-dealer-tampilan${doc.id}">${keteranganRetur}</div>                      
    </div>
    `

    retur.innerHTML = `
    <div class="modal fade" id="modalreturdealer${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pengaturan Data Return</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <form id="tambah-retur-dealer${doc.id}">
                <div class="form-group">
                  <label class="col-form-label">Nama Dealer</label>
                  <input type="text" value="${namaDealer}" class="form-control" id="dealer-retur${doc.id}" autocomplete="off" required>
                </div> 
                <div class="form-group">
                  <label class="col-form-label">Status Return</label>
                <select class="form-control" id="status-retur-dealer${doc.id}" required>
                    <option selected>Sudah Selesai</option>
                    <option>Belum Selesai</option>
                    </select>
                </div>                
                <div class="form-group">
                  <label class="col-form-label">Produk Return</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="produk-retur-dealer${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off" required>${produkRetur.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Keterangan Tambahan</label>
                  <textarea oninput="auto_grow(this)" class="form-control" id="keterangan-retur-dealer${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off">${keteranganRetur.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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

    previewPrint.innerHTML = `
    <div class="header-surat">
      <div class="kop-surat"></div>
      <div class="isi-header-surat">
      <div class="nama-header-surat">PT GALAXY DIGITAL NIAGA</div>
      <div class="alamat-header-surat">Ruko Mall Metropolis Townsquare Block GM3 No.6, Cikokol, Tangerang</div>
      <div class="email-header-surat">E-mail : galaxycameraid@gmail.com</div>
      <div class="kontak-header-surat">Telp. 082111311131</div>
      </div>
    </div>
    <div class="sub-header-surat">
      <div style="display: grid;grid-template-columns: 50% 50%;">
        <div>Lampiran : 1 Berkas </div>
        <div style="text-align: right;">${hari[new Date().getDay()]}, ${tanggalSekarang}</div>
      </div>
      <div>Perihal : Pengembalian Barang</div>
    </div>
    <div class="body-surat">
      <div style="padding: 20px 0px;">
      <div>Yth,</div>
      <div id="dealer-retur-surat${doc.id}">${namaDealer}</div>
      </div>
      <div style="padding: 20px 0px;">Dengan hormat,</div>
      <div style="text-indent: 30px;">Pada hari ini, ${hari[new Date().getDay()]}, ${tanggalSekarang} di PT Galaxy DIGITAL NIAGA mengembalikan barang kepada saudara berupa :</div>      
      <div class="produk-retur-surat" id="produk-retur-surat${doc.id}">${produkRetur}</div>
      <div style="text-indent: 30px;padding:0px 10px 10px 10px;">Barang sudah kami cek dan dinyatakan dalam kondisi rusak atau tidak layak. Sehingga dengan adanya kasus ini, kami merasa kecewa karena barang tersebut tidak dapat dijual atau dipergunakan lagi dan mendapatkan kerugian terkait barang rusak tersebut.</div>
      <div style="text-indent: 30px;padding: 10px;">Berdasarkan hal diatas, dengan penuh kesungguhan kami meminta agar saudara mengganti barang tersebut dengan nilai barang yang ada.</div>
      <div style="text-indent: 30px;padding: 10px;">Demikian surat pengembalian barang ini kami buat dengan harapan adanya perbaikan kualitas barang, sehingga kedepannya tidak terjadi masalah yang sama. Atas perhatian dan kerjasamanya kami ucapkan terima kasih.</div>
    </div>
    <div class="footer-surat">
      <div class="footer-menyerahkan-surat">
        <div>Yang Menyerahkan</div>
        <div style="padding: 80px;"></div>
      </div>
      <div class="footer-menerima-surat">
        <div>Yang Menerima</div>
        <div style="padding: 80px;"></div>
      </div>
    </div>
    `

    listReturDealerSelesai.appendChild(div);
    
    modalReturDealer.appendChild(retur);    

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data retur ini?');
        if(konfirmasi == true){
        db.collection('returDealerSelesai').doc(doc.id).get().then(function(item){
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(docs){
        let tanggal = new Date().getTime();
            db.collection('overview').add({
                penggunaOverview : docs.data().username,
                waktuOverview : tanggal,
                namaDealer : item.data().namaDealer,
                produkRetur : item.data().produkRetur,
                keteranganRetur : item.data().keteranganRetur,
                statusProduk : 'Sudah Selesai',
                overview : 'delete-return-dealer'
                })
        }).then(() => {
            db.collection('returDealerSelesai').doc(doc.id).delete();
            $('#modalreturdealer' + doc.id).modal('hide')
                })
            })
        }
    })

    let print = document.querySelector('#print' + doc.id);
    print.addEventListener('click', (e) => {
        e.stopPropagation();
        previewPrintReturDealer.appendChild(previewPrint);
        db.collection('returDealerSelesai').doc(doc.id).get().then(function(item){
        document.querySelector('#dealer-retur-surat' + doc.id).innerHTML = item.data().namaDealer;
        document.querySelector('#produk-retur-surat' + doc.id).innerHTML = item.data().produkRetur;     
        }).then(() => {        
        document.body.style.visibility = 'hidden';
        previewPrintReturDealer.style.visibility = 'visible';
        document.body.style.setProperty("background-color", "white", "important");
        document.querySelector('#tombol-burger').style.visibility = 'hidden';
        previewPrintReturDealer.style.position = 'absolute';
        previewPrintReturDealer.style.width = '100%';
        previewPrintReturDealer.style.top = '0';
        previewPrintReturDealer.style.left = '0';
        document.querySelector('#myTabContent').style.marginLeft = '0';
        window.print();
        document.querySelector('#print-retur' + doc.id).remove();
        document.querySelector('#tombol-burger').style.visibility = 'visible';
        document.body.style.visibility = 'visible';
        document.querySelector('#preview-print-cetak-label').style.position = 'relative';
        document.body.style.setProperty("background-color", "#eeeeee", "important");
        setTimeout(function(){
        document.querySelector('#darken').style.backgroundColor = '0';
        document.querySelector('#darken').style.width = '0';
        document.querySelector('#darken').style.height = '0';
        document.querySelector('#darken').style.position = '0';
        document.querySelector('#darken').style.opacity = '0';
        document.querySelector('#darken').style.zIndex = '0';
        },0)
        })        
    })

    let edit = document.querySelector('#tambah-retur-dealer' + doc.id);
    edit.addEventListener('submit', (e) =>{
        e.preventDefault();
        let namaDealerUpdate = document.querySelector('#dealer-retur' + doc.id).value;
        let produkReturUpdate = document.querySelector('#produk-retur-dealer' + doc.id).value;
        let statusProdukUpdate = document.querySelector('#status-retur-dealer' + doc.id).value;
        let keteranganReturUpdate = document.querySelector('#keterangan-retur-dealer' + doc.id).value;
        let overviewCadangan;
        db.collection('returDealerSelesai').doc(doc.id).get().then(function(item) {
        tanggal = item.data().tanggal;
        namaDealer = item.data().namaDealer;
        produkRetur = item.data().produkRetur;
        keteranganRetur = item.data().keteranganRetur;
        if(statusProdukUpdate == 'Belum Selesai'){
            db.collection('returDealerPending').add({
                tanggal : tanggal,
                namaDealer : namaDealerUpdate,
                produkRetur : produkReturUpdate.replace(/\n\r?/g, '<br/>'),
                keteranganRetur : keteranganReturUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                db.collection('returDealerSelesai').doc(doc.id).delete();
                $('#modalreturdealer' + doc.id).modal('hide');
            })
        } else {
            db.collection('returDealerSelesai').doc(doc.id).update({
                tanggal : tanggal,
                namaDealer : namaDealerUpdate,
                produkRetur : produkReturUpdate.replace(/\n\r?/g, '<br/>'),
                keteranganRetur : keteranganReturUpdate.replace(/\n\r?/g, '<br/>')
            }).then(() => {
                $('#modalreturdealer' + doc.id).modal('hide');
            })
        }
            })
    })

        $(document).ready(function() {
        db.collection('returDealerSelesai').onSnapshot(snapshot =>{
        let items = $('#list-retur-dealer-selesai > .retur').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })
        let daftarReturDealerSelesai = $('#list-retur-dealer-selesai');
        $.each(items, function(i, div) {
        daftarReturDealerSelesai.append(div);
        })
      })
    })


}

function renderUpdateReturDealerSelesai(doc){
    let namaDealer = doc.data().namaDealer;
    let produkRetur = doc.data().produkRetur;
    let keteranganRetur = doc.data().keteranganRetur; 
    document.querySelector('#dealer-retur-tampilan' + doc.id).innerHTML = namaDealer;
    document.querySelector('#produk-retur-dealer-tampilan' + doc.id).innerHTML = produkRetur;
    document.querySelector('#keterangan-retur-dealer-tampilan' + doc.id).innerHTML = keteranganRetur;
}

const listBelanja = document.querySelector('#list-daftar-belanja');
const modalPengeluaran = document.querySelector('#modal-edit-daftar-belanja');
function renderPengeluaran(doc){
    let div = document.createElement('div')
    let pengeluaran = document.createElement('div');
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'pengeluaran' + doc.id)
    let tanggal = doc.data().tanggal;
    let penggunaBelanja = doc.data().penggunaBelanja;
    let deskripsiItem = doc.data().deskripsiItem;
    let jumlahPengeluaran = doc.data().jumlahPengeluaran;
    div.classList.add('dokumentasi-pengeluaran' + doc.id, 'pengeluaran', 'pengeluaran-' + penggunaBelanja.toLowerCase().replace(/\s/g, "-"));    
    div.setAttribute('data-date', tanggal);
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;

    div.innerHTML = `
    <div class="keterangan-pengeluaran-tampilan" data-toggle="modal" data-target="#modalpengeluaran${doc.id}"><i class='fas fa-user'></i> ${penggunaBelanja}, <span id="jumlah-pengeluaran-belanja-tampilan${doc.id}">${"Rp " + Number(jumlahPengeluaran).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"}</span></div><i class='fas fa-check selesai-pengeluaran' id="selesai${doc.id}"></i><i class='fas fa-trash-alt hapus-pengeluaran' id="hapus${doc.id}"></i>
    `
    pengeluaran.innerHTML = `
<div class="modal fade" id="modalpengeluaran${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pengeluaran ${tanggal}, ${penggunaBelanja}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div class="data-pengeluaran">
        <div class="info-pengeluaran">
        <div>Karyawan</div>
        <div>:</div>
        <div style="font-weight:bold;" id="pengeluaran-karyawan${doc.id}">${penggunaBelanja.toUpperCase()}</div>
        <div>Deskripsi Pengeluaran</div>
        <div>:</div>        
        <div id="deskripsi-item-belanja-body${doc.id}">${deskripsiItem}</div>
        <div>Jumlah Pengeluaran</div>
        <div>:</div>        
        <div id="jumlah-pengeluaran-belanja-body${doc.id}">${"Rp " + Number(jumlahPengeluaran).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"}</div>        
        </div>
        <div id="selesai-kedua${doc.id}" class="btn btn-success selesai selesai-pengeluaran-kedua">Selesaikan Pengeluaran</div>
        <div id="edit${doc.id}" class="btn btn-warning edit">Edit Pengeluaran</div>
        <div id="hapus-kedua${doc.id}" class="btn btn-danger hapus">Hapus Pengeluaran</div>
      </div>
    <form id="modal-pengeluaran${doc.id}" class="modal-pengeluaran">
      <div class="form-group">
        <label class="col-form-label">Deskripsi Item</label>
        <textarea oninput="auto_grow(this)" class="form-control" id="deskripsi-item-belanja${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:50px;" autocomplete="off" required>${deskripsiItem.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
      </div>
      <div class="form-group">
        <label class="col-form-label">Jumlah Pengeluaran</label>
        <input type="number" value="${jumlahPengeluaran}" class="form-control your_class" id="jumlah-pengeluaran-belanja${doc.id}" autocomplete="off" required>
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

    listBelanja.appendChild(div);
    modalPengeluaran.appendChild(pengeluaran);

    let selesai = document.querySelector('#selesai' + doc.id);
    selesai.addEventListener('click', function(e){
        e.stopPropagation();
        db.collection('pengeluaran').doc(doc.id).get().then(function(item){
            db.collection('pengeluaranSelesai').add({
                tanggalPengeluaran : tanggal,
                tanggal : new Date().getTime(),
                deskripsiItem : item.data().deskripsiItem,
                jumlahPengeluaran : item.data().jumlahPengeluaran,
                penggunaBelanja : item.data().penggunaBelanja
            }).then(() => {
                db.collection('pengeluaran').doc(doc.id).delete();
                $('#modalpengeluaran' + doc.id).modal('hide')
            })
        })
    })

    let edit = document.querySelector('#edit' + doc.id);
    edit.addEventListener('click', function(e){
        let formEdit = document.querySelector('#modal-pengeluaran' + doc.id);
        formEdit.style.display = "block";
        formEdit.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            db.collection('pengeluaran').doc(doc.id).update({
                deskripsiItem: document.querySelector('#deskripsi-item-belanja' + doc.id).value.replace(/\n\r?/g, '<br/>'),
                jumlahPengeluaran: document.querySelector('#jumlah-pengeluaran-belanja' + doc.id).value
            }).then(() => {
                formEdit.style.display = "none";
            })
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', function(e){
        let konfirmasi = confirm('Anda yakin ingin menghapus data pengeluaran ini?');
        if(konfirmasi == true){
        db.collection('pengeluaran').doc(doc.id).delete();
        }
    })

    let hapusKedua = document.querySelector('#hapus-kedua' + doc.id);
    hapusKedua.addEventListener('click', function(e){
        let konfirmasi = confirm('Anda yakin ingin menghapus data pengeluaran ini?');
        if(konfirmasi == true){
        db.collection('pengeluaran').doc(doc.id).delete();
        $('#modalpengeluaran' + doc.id).modal('hide')
        }
    })    

        $(document).ready(function() {
        db.collection('pengeluaran').onSnapshot(snapshot =>{
        let items = $('#list-daftar-belanja > .pengeluaran').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })
        let daftarPengeluaran = $('#list-daftar-belanja');
        $.each(items, function(i, div) {
        daftarPengeluaran.append(div);
        })
      })
    })

}

function renderUpdatePengeluaran(doc){
    let deskripsiItem = doc.data().deskripsiItem;
    let jumlahPengeluaran = doc.data().jumlahPengeluaran;
    document.querySelector('#deskripsi-item-belanja-body' + doc.id).innerHTML = deskripsiItem;
    document.querySelector('#jumlah-pengeluaran-belanja-body' + doc.id).innerHTML = "Rp " + Number(jumlahPengeluaran).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"
    document.querySelector('#jumlah-pengeluaran-belanja-tampilan' + doc.id).innerHTML = "Rp " + Number(jumlahPengeluaran).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"

}

const listBelanjaSelesai = document.querySelector('#list-daftar-belanja-selesai');
function renderPengeluaranSelesai(doc){
    let div = document.createElement('div')
    let pengeluaran = document.createElement('div');
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'pengeluaran-selesai' + doc.id)
    let tanggalPengeluaran = doc.data().tanggalPengeluaran;
    let tanggal = doc.data().tanggal;
    let penggunaBelanja = doc.data().penggunaBelanja;
    let deskripsiItem = doc.data().deskripsiItem;
    let jumlahPengeluaran = doc.data().jumlahPengeluaran;
    div.setAttribute('data-date', tanggal);
    div.classList.add('dokumentasi-pengeluaran' + doc.id, 'pengeluaran-selesai', 'pengeluaran-selesai-' + penggunaBelanja.toLowerCase().replace(/\s/g, "-"));
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;

    div.innerHTML = `
    <div class="keterangan-pengeluaran-tampilan" data-toggle="modal" data-target="#modalpengeluaran${doc.id}"><i class='fas fa-user'></i> ${penggunaBelanja}, <span id="jumlah-pengeluaran-belanja-tampilan${doc.id}">${"Rp " + Number(jumlahPengeluaran).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"}</span> <span class="badge badge-success">Sudah dibayar</span></div><i class='fas fa-trash-alt hapus-pengeluaran' id="hapus${doc.id}"></i>
    `
    pengeluaran.innerHTML = `
<div class="modal fade" id="modalpengeluaran${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pengeluaran ${tanggalPengeluaran}, ${penggunaBelanja}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
        <div class="data-pengeluaran">
        <div class="info-pengeluaran">
        <div>Karyawan</div>
        <div>:</div>
        <div style="font-weight:bold;" id="pengeluaran-karyawan${doc.id}">${penggunaBelanja.toUpperCase()}</div>
        <div>Deskripsi Pengeluaran</div>
        <div>:</div>        
        <div id="deskripsi-item-belanja-body${doc.id}">${deskripsiItem}</div>
        <div>Jumlah Pengeluaran</div>
        <div>:</div>        
        <div id="jumlah-pengeluaran-belanja-body${doc.id}">${"Rp " + Number(jumlahPengeluaran).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"} (Sudah dilunasi pada ${tanggal})</div>        
        </div>
        <div id="hapus-kedua${doc.id}" class="btn btn-danger hapus">Hapus Pengeluaran</div>
      </div>
            </div>
          </div>
       </div>
     </div>    
    `

    listBelanjaSelesai.appendChild(div);
    modalPengeluaran.appendChild(pengeluaran);

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', function(e){
        let konfirmasi = confirm('Anda yakin ingin menghapus data pengeluaran ini?');
        if(konfirmasi == true){
        db.collection('pengeluaranSelesai').doc(doc.id).delete();
        $('#modalpengeluaran' + doc.id).modal('hide')
        }
    })

    let hapusKedua = document.querySelector('#hapus-kedua' + doc.id);
    hapusKedua.addEventListener('click', function(e){
        let konfirmasi = confirm('Anda yakin ingin menghapus data pengeluaran ini?');
        if(konfirmasi == true){
        db.collection('pengeluaranSelesai').doc(doc.id).delete();
        $('#modalpengeluaran' + doc.id).modal('hide')
        }
    })

        $(document).ready(function() {
        db.collection('pengeluaranSelesai').onSnapshot(snapshot =>{
        let items = $('#list-daftar-belanja-selesai > .pengeluaran').get();
        items.sort(function(a, b) {
        let keyA = $(a).data('date');
        let keyB = $(b).data('date');
        if (keyA > keyB) return 1;
        if (keyA < keyB) return -1;
        return 0;
        })
        let daftarPengeluaranSelesai = $('#list-daftar-belanja-selesai');
        $.each(items, function(i, div) {
        daftarPengeluaranSelesai.append(div);
        })
      })
    })

}

function renderEventKalender(doc){
    let div = document.createElement('div');
    div.setAttribute('data-id', doc.id);
    div.setAttribute('id', 'event-kalender' + doc.id);
    div.classList.add('event-kalender')
    let tanggal = doc.data().tanggal;
    div.setAttribute('data-date', tanggal);
    let penggunaEvent = doc.data().penggunaEvent;
    let deskripsiEvent = doc.data().deskripsiEvent;
    let dd = String(new Date().getDate()).padStart(2, '0');
    let mm = String(new Date().getMonth() + 1).padStart(2, '0');
    let yyyy = new Date().getFullYear();
    let tanggalSekarang = yyyy + mm + dd;

    div.innerHTML = `
    <div>
    <div style="font-size:14px;">${deskripsiEvent}</div>
    <div style="font-size:12px;">${penggunaEvent}</div>
    </div>
    <div id="hapus${doc.id}" class="hapus-event-kalender">x</div>
    `
    document.querySelector('#list-event-kalender').appendChild(div);

    let tanggalKalender = document.querySelectorAll('.day');
    for(let i = 0; i < tanggalKalender.length; i++){
        let li = tanggalKalender[i].querySelectorAll('li');
        for(let y = 0; y < li.length; y++){
                if(li[y].getAttribute('data-date') == tanggal){
                    if(!li[y].querySelector('.event-calendar-available')){
                        let availability = document.createElement('div');
                        availability.classList.add('event-calendar-available');                    
                        li[y].appendChild(availability);                    
                    }   
                    if(li[y].getAttribute('date-active') == 'yes'){
                    document.querySelector('#event-kalender' + doc.id).style.display = 'grid';
                    document.querySelector('#event-kalender' + doc.id).style.left = '0px'
                } else {
                    document.querySelector('#event-kalender' + doc.id).style.display = 'none';
                    document.querySelector('#event-kalender' + doc.id).style.left = 'calc(-100% - 20px)'
                }
            }
        }
    }    

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', function(e){
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus event kalender berikut?');
        if(konfirmasi == true){
            db.collection('eventKalender').doc(doc.id).delete();
        }
    })

}

//const listPedoman = document.querySelector('#list-pedoman-galaxy')
//function renderPedoman(doc){
//    let div = document.createElement('div');
//    let tanggal = doc.data().tanggal;
//    let judul = doc.data().judul;
//    let keterangan = doc.data().keterangan;
//    div.setAttribute('data-id', doc.id);
//    div.setAttribute('id', 'pedoman' + doc.id);
//    div.setAttribute('data-date', tanggal);
//    div.innerHTML = `
//    <div style="position:relative;background-color:white;padding:10px;margin:10px;border-radius:5px;">
//        <div style="position:absolute;top:0;right:10px;">x</div>
//        <div>${judul}</div>
//        <div>${keterangan}</div>
//        <div class="btn btn-primary pull-right">Read More</div>
//    </div>
//    `
//    listPedoman.appendChild(div);
//}

function auto_grow(element){
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}





