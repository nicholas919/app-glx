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

const daftarKaryawan = [];
const daftarEmailKaryawan = [];
function renderPeserta(doc){
    let tr = document.createElement('tr');
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

    if(auth.currentUser.email != email){
        document.querySelector('#target-peserta').appendChild(opsiTugas);
        document.querySelector('#target-peserta-kedua').appendChild(opsiTugasKedua);
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
            db.collection('peserta').doc(doc.id).update({
                lokasi : lokasiPeserta,
                libur : liburPeserta
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
                db.collection('peserta').doc(doc.id).delete();
                $('#modaleditpeserta' + doc.id).modal('hide');
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
    let removeToken = functions.httpsCallable('removeToken');
    removeToken({email: email}).then(() => {
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
                analisis = item.data().analisis;
                kontenAnalisis = item.data().kontenAnalisis;                
                let tanggal = new Date().getTime();
                db.collection('swot').doc(doc.id).update({
                    analisis : analisisUpdate,
                    analisisSebelumnya : analisis,
                    kontenAnalisis : kontenAnalisisUpdate.replace(/\n\r?/g, '<br/>')
                }).then(() => {
                    formEdit.style.display = "none";
                })
            })
        })
    })
    
    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', function(e){
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data analisis swot ini?');
        if(konfirmasi == true){
            db.collection('swot').doc(doc.id).delete();
            $('#modaleditswot' + doc.id).modal('hide');   
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
        let editKesalahan = document.querySelectorAll('.edit-kesalahan');
        let hapusKesalahan = document.querySelectorAll('.hapus-kesalahan');
        let peserta = document.querySelectorAll('.peserta');
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
                    document.querySelector('#kalender').style.display = 'block';                         
            } else {               
                    document.querySelector('#kalender').style.display = 'grid';                      
            }
        }
        
            if(window.innerWidth > 900){
                document.querySelector('#kalender').style.display = 'grid';
            } else {
                document.querySelector('#kalender').style.display = 'block';
            }

            winWidth700(z);
            z.addListener(winWidth700);
            function winWidth700(z){
            if (z.matches) {
                    document.querySelector('#tabel-peserta').style.width = '250%';               
            } else {
                    document.querySelector('#tabel-peserta').style.width = '100%';                    
            }
        }   
            [rolePeserta, editPeserta, hapusPeserta, editKesalahan, hapusKesalahan, kesalahan, bodyEmail, tombolTambahMenu, editPengumuman, 
            hapusPengumuman, selesaiPengeluaranKedua, document.querySelector('#tombol-tambah-kesalahan'), document.querySelector('#tombol-tambah-peserta'), 
            document.querySelector('#tombol-tambah-kategori-menu')].forEach(item => {
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
            [navbarMenu, document.querySelector('#tambahpengumuman'), document.querySelector('#myTabContent'), document.querySelector('#jumbotron-swot')
            , document.querySelector('#daftar-peserta'), document.querySelector('#halaman-kesalahan'), document.querySelector('#tambahperpindahanbarang')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].style.display = 'block';
                    }                    
                } else {
                    item.style.display = 'block';                    
                }
            });
            [document.querySelector('#list-menu-tambahan'), document.querySelector('#list-menu-tambahan-kedua'), document.querySelector('#list-menu-tambahan-ketiga'),
             document.querySelector('#list-menu-tambahan-keempat')].forEach(item => {
                item.style.display = 'grid';                                      
            });
            document.querySelector('#jumbotron-performa-peserta-individu').style.display = 'none';
        } else if(user.adminKantor){
            document.querySelector('#pengguna-overview').innerHTML = 'anda dan pengguna lain';
            winWidth900(x);
            x.addListener(winWidth900);
            function winWidth900(x){
            if (x.matches) {                  
                    document.querySelector('#kalender').style.display = 'block';                         
            } else {              
                    document.querySelector('#kalender').style.display = 'grid';  
            }
        }   

            if(window.innerWidth > 900){
                document.querySelector('#kalender').style.display = 'grid';
            } else {
                document.querySelector('#kalender').style.display = 'block';
            }

            [rolePeserta, editPeserta, hapusPeserta, editKesalahan, hapusKesalahan, bodyEmail, emailTable, editPengumuman, hapusPengumuman, document.querySelector('#tombol-tambah-kesalahan')
            , document.querySelector('#tombol-tambah-peserta')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].setAttribute('style','display:none !important;');
                    }        
                } else {
                    item.setAttribute('style','display:none !important;');
                }
            });
            [kesalahan, tombolTambahMenu, selesaiPengeluaranKedua, document.querySelector('#tombol-tambah-kategori-menu')].forEach(item => {
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
            [navbarMenu, document.querySelector('#myTabContent'), document.querySelector('#daftar-peserta')
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
                    document.querySelector('#kalender').style.display = 'block';                         
            } else {                
                    document.querySelector('#kalender').style.display = 'grid';
            }
        }   
            if(window.innerWidth > 900){
                document.querySelector('#kalender').style.display = 'grid';
            } else {
                document.querySelector('#kalender').style.display = 'block';
            }

            [editPeserta, hapusPeserta, bodyEmail, emailTable, editKategoriMenu, hapusKategoriMenu, editMenu, hapusMenu, tombolTambahMenu, editPengumuman,
             hapusPengumuman, selesaiPerpindahan, hapusPerpindahan, editPerpindahan, selesaiPengeluaran, selesaiPengeluaranKedua, document.querySelector('#tombol-tambah-kesalahan'),
             document.querySelector('#tombol-tambah-peserta'), document.querySelector('#tambahtugas'), document.querySelectorAll('.action-tugas'), document.querySelectorAll('.list-action-tugas'),
             document.querySelector('#tombol-tambah-kategori-menu'), document.querySelector('#lihatperpindahanpending'), document.querySelector('#lihatperpindahanselesai')].forEach(item => {
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
            , document.querySelector('#surat-jalan'), document.querySelector('#surat-penawaran'), document.querySelector('#jumbotron-swot'), document.querySelector('#daftar-peserta')
            , document.querySelector('#tambahperpindahanbarang'), document.querySelector('#format-order'), document.querySelector('#req-faktur-pajak')].forEach(item => {
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
            [editPeserta, hapusPeserta, document.querySelector('#tombol-tambah-kesalahan'), document.querySelector('#tombol-tambah-peserta')].forEach(item => {
                if(item.length != undefined){
                    for(let x = 0; x<item.length;x++){
                        item[x].setAttribute('style','display:none !important;');
                    }        
                } else {
                    item.setAttribute('style','display:none !important;');
                }                
            });
            [navbarMenu, document.querySelector('#customer-reply'), document.querySelector('#google-sheet'), document.querySelector('#jumbotron-performa-peserta-individu')
            , document.querySelector('#daftar-peserta'), document.querySelector('#halaman-kesalahan'), document.querySelector('#kalender')].forEach(item => {
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
      document.querySelector('#surat-penawaran').style.display = 'none';
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
    [navbarMenu, document.querySelector('#myTabContent'), document.querySelector('#customer-reply'), document.querySelector('#google-sheet')
    , document.querySelector('#jumbotron-performa-peserta-individu'), document.querySelector('#daftar-peserta'), document.querySelector('#list-menu-tambahan'), document.querySelector('#list-menu-tambahan-kedua')
    , document.querySelector('#list-menu-tambahan-ketiga'), document.querySelector('#list-menu-tambahan-keempat'), document.querySelector('#halaman-kesalahan')
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
    [document.querySelector('#tombol-tambah-kesalahan'), document.querySelector('#tombol-tambah-peserta')].forEach(item => {
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
    let addMember = functions.httpsCallable('addMember');
    let addAdmin = functions.httpsCallable('addAdmin');
    let refreshRoleAdminKantor;
    let refreshRoleMember;

    document.querySelector('#nama-table' + doc.id).innerHTML = nama;
    document.querySelector('#libur-table' + doc.id).innerHTML = libur;
    document.querySelector('#lokasi-table' + doc.id).innerHTML = lokasi;
    document.querySelector('#nama' + doc.id).innerHTML = nama.toUpperCase();
    document.querySelector('#libur' + doc.id).innerHTML = libur;
    document.querySelector('#lokasi' + doc.id).innerHTML = lokasi;

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

    $(document).ready(function(){
        let status = document.querySelector('#status-peserta' + doc.id).innerHTML;
        let opsi = document.querySelector('.opsi-target-peserta' + doc.id);
        let opsiKedua = document.querySelector('.opsi-target-peserta-kedua' + doc.id);
        if(opsi){
            opsi.style.display = 'block';
        } else if(!opsi){
            document.querySelector('#target-peserta').appendChild(opsiTugas);
            opsiTugas.style.display = 'block';
        }
    })

        switch(role){         
        case "Member":
        addMember({email: email}).then(() => {
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
        addAdmin({email: email}).then(() => {
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
    document.querySelector('#konten-analisis' + doc.id).innerHTML = kontenAnalisis.replace(/<br\s*[\/]?>/gi, "\n");
    if(analisis != analisisSebelumnya){
        document.querySelector('.dokumentasi-swot' + doc.id).classList.remove(analisisSebelumnya.toLowerCase());
        document.querySelector('.dokumentasi-swot' + doc.id).classList.add(analisis.toLowerCase());
    }
    document.querySelector('#analisis-swot-table' + doc.id).innerHTML = analisis;
    document.querySelector('#konten-analisis-table' + doc.id).innerHTML = kontenAnalisis;
    document.querySelector('#analisis-swot-body' + doc.id).innerHTML = analisis;
    document.querySelector('#konten-analisis-body' + doc.id).innerHTML = kontenAnalisis;

    let pilihanAnalisis = document.querySelector('#analisis-swot' + doc.id);
    let opsiAnalisis;
    for(let x = 0; x<pilihanAnalisis.options.length; x++){
        opsiAnalisis = pilihanAnalisis.options[x];
        if(opsiAnalisis.value == analisis){
            opsiAnalisis.setAttribute('selected', 'selected');
        }
    }    

}

const listTugasPendingPeserta = document.querySelector('#list-tugas-pending-peserta');
const listTugasSelesaiPeserta = document.querySelector('#list-tugas-selesai-peserta');
function renderTugas(doc){
    let namaPeserta = doc.data().namaPeserta;
    let kontenTugas = doc.data().kontenTugas;
    let perMinggu = doc.data().perMinggu;
    let perHari = doc.data().perHari;
    let perJam = doc.data().perJam;
    let perMenit = doc.data().perMenit;
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let waktuRilis = doc.data().waktuRilis;
    let waktuPenyelesaian = doc.data().waktuPenyelesaian;
    let hhRilis = String(new Date(waktuRilis).getHours()).padStart(2, '0');
    let msRilis = String(new Date(waktuRilis).getMinutes()).padStart(2, '0');
    let ddRilis = String(new Date(waktuRilis).getDate()).padStart(2, '0');
    let mmRilis = bulan[new Date(waktuRilis).getMonth()];
    let yyyyRilis = new Date(waktuRilis).getFullYear();
    let waktuDeadline = new Date(waktuRilis + (perMinggu * 7 * 24 * 60 * 60 * 1000) + (perHari * 24 * 60 * 60 * 1000) + (perJam * 60 * 60 * 1000) + (perMenit * 60 * 1000));
    waktuRilis = hhRilis + ':' + msRilis + " / " + ddRilis + ' ' + mmRilis + ' ' + yyyyRilis;
    let hhDeadline = String(new Date(waktuDeadline).getHours()).padStart(2, '0');
    let msDeadline = String(new Date(waktuDeadline).getMinutes()).padStart(2, '0');
    let ddDealine = String(new Date(waktuDeadline).getDate()).padStart(2, '0');
    let mmDeadline = bulan[new Date(waktuDeadline).getMonth()];
    let yyyyDeadline = new Date(waktuDeadline).getFullYear();
    waktuDeadline = hhDeadline + ':' + msDeadline + " / " + ddDealine + ' ' + mmDeadline + ' ' + yyyyDeadline;
    let taskMasterUID = doc.data().taskMasterUID;
    let taskMaster = doc.data().taskMaster;
    let prioritasTugas = doc.data().prioritasTugas;
    let complete = doc.data().complete;
    let tr = document.createElement('tr');
    let modal = document.createElement('div');
    let prioritasTinggi;
    let prioritasSedang;
    let prioritasRendah;
    switch(prioritasTugas){
        case "Tinggi":
        prioritasTinggi = 'selected';
        break;
        case "Sedang":
        prioritasSedang = 'selected';
        break;
        case "Rendah":
        prioritasRendah = 'selected';
    }
    if(complete){
        tr.setAttribute('task-complete', '');
        complete = 'checked';
        let hhPenyelesaian = String(new Date(waktuPenyelesaian).getHours()).padStart(2, '0');
        let msPenyelesaian = String(new Date(waktuPenyelesaian).getMinutes()).padStart(2, '0');
        let ddPenyelesaian = String(new Date(waktuPenyelesaian).getDate()).padStart(2, '0');
        let mmPenyelesaian = bulan[new Date(waktuPenyelesaian).getMonth()];
        let yyyyPenyelesaian = new Date(waktuPenyelesaian).getFullYear();
        waktuPenyelesaian = hhPenyelesaian + ':' + msPenyelesaian + " / " + ddPenyelesaian + ' ' + mmPenyelesaian + ' ' + yyyyPenyelesaian;
    } else {
        tr.setAttribute('task-incomplete', '');
        complete = '';
        waktuPenyelesaian = '-'
    }
    tr.setAttribute('data-id', doc.id);
    prioritasTugas = `<div class="prioritas-tugas-${prioritasTugas.toLowerCase()}">${prioritasTugas}</div>`
    tr.innerHTML = `
    <td class="align-middle">${waktuRilis}</td>
    <td class="align-middle text-left" id="konten-tugas-tampilan${doc.id}">${kontenTugas}</td>    
    <td class="align-middle font-weight-bold" id=nama-peserta-tugas${doc.id}>${namaPeserta}</td>    
    <td class="align-middle font-weight-bold" id="prioritas-tugas-tampilan${doc.id}">${prioritasTugas}</td>    
    <td class="align-middle" id="waktu-penyelesaian-tugas${doc.id}">${waktuPenyelesaian}</td>       
    <td class="align-middle" id="waktu-deadline-tugas${doc.id}">${waktuDeadline}</td>     
    <td class="align-middle"><input type="checkbox" class="checkbox-tugas m-1" id="checkbox-tugas${doc.id}" ${complete}></td>
    <td class="align-middle list-action-tugas">
        <div class="d-flex">
            <a href="#" class="btn btn-warning mr-1 text-white" data-target="#modaltugas${doc.id}" data-toggle="modal">Update</a>
            <a href="#" class="btn btn-danger" id="hapus${doc.id}">Delete</a>
        </div>
    </td>
    `
    modal.innerHTML = `
    <div class="modal fade" id="modaltugas${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Menambahkan Tugas Terbaru</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="edit-tugas${doc.id}">
                        <div class="form-group">
                            <label>Konten Tugas</label>
                            <textarea oninput="auto_grow(this)" class="form-control" id="konten-tugas${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${kontenTugas.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
                        </div>            
                        <div class="form-group">
                            <label>Prioritas Tugas</label>
                            <select class="form-control" id="prioritas-tugas${doc.id}" required>
                                <option ${prioritasTinggi}>Tinggi</option>
                                <option ${prioritasSedang}>Sedang</option>
                                <option ${prioritasRendah}>Rendah</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label style="display: block;text-align:center;">Waktu Pengerjaan</label>
                            <div class="form-row align-items-center">
                                <div class="col-sm-3 my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="font-size: 15px !important;">Minggu</div>
                                        </div>
                                        <input type="number" id="per-minggu${doc.id}" autocomplete="off" value="${perMinggu}" max="53" min="0" class="form-control your_class">
                                    </div>
                                </div>
                                <div class="col-sm-3 my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="font-size: 15px !important;">Hari</div>
                                        </div>
                                        <input type="number" id="per-hari${doc.id}" autocomplete="off" value="${perHari}" max="366" min="0" class="form-control your_class">
                                    </div>
                                </div>
                                <div class="col-sm-3 my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="font-size: 15px !important;">Jam</div>
                                        </div>
                                        <input type="number" id="per-jam${doc.id}" autocomplete="off" value="${perJam}" max="24" min="0" class="form-control your_class">
                                    </div>
                                </div>
                                <div class="col-sm-3 my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="font-size: 15px !important;">Menit</div>
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

    if(complete){
        listTugasSelesaiPeserta.append(tr);
    } else {
        listTugasPendingPeserta.append(tr);
    }
    document.body.appendChild(modal);

    document.querySelector('#edit-tugas' + doc.id).addEventListener('submit', function(e){
        e.preventDefault();
        db.collection('tugas').doc(doc.id).update({
            kontenTugas : this['konten-tugas' + doc.id].value.replace(/\n\r?/g, '<br/>'),
            prioritasTugas : this['prioritas-tugas' + doc.id].value,
            perMinggu : this['per-minggu' + doc.id].value,
            perHari : this['per-hari' + doc.id].value,
            perJam : this['per-jam' + doc.id].value,
            perMenit : this['per-menit' + doc.id].value
        }).then(() => {
            alert('Informasi tugas telah diupdate!')
        })
    })

    document.querySelector('#checkbox-tugas' + doc.id).addEventListener('change', function(e){
        e.stopPropagation();
        if(this.checked){
            let konfirmasi = confirm('Anda yakin ingin menyelesaikan tugas berikut?');
            if(konfirmasi){
                db.collection('tugas').doc(doc.id).update({
                    complete : true,
                    waktuPenyelesaian : new Date().getTime()
                }).then(() => {
                    alert('Tugas berhasil diselesaikan')
                })
            } else {
                this.checked = false;
            }
        } else {
            let konfirmasi = confirm('Anda yakin ingin membatalkan penyelesaian tugas berikut?');
            if(konfirmasi){
                db.collection('tugas').doc(doc.id).update({
                    complete : false,
                    waktuPenyelesaian : firebase.firestore.FieldValue.delete()
                }).then(() => {
                    alert('Berhasil membatalkan penyelesaian tugas')
                })
            } else {
                this.checked = true;
            }
        }
    })

    document.querySelector('#hapus' + doc.id).addEventListener('click', function(e){
        e.stopPropagation();
        let konfirmasi = confirm('Apa anda yakin ingin menghapus tugas ' + namaPeserta);
        if(konfirmasi){
            db.collection('tugas').doc(doc.id).delete().then(() => {
                alert('Berhasil menghapus tugas ' + namaPeserta)
            })
        }
    })

}

function renderUpdateTugas(doc){
    let namaPeserta = doc.data().namaPeserta;
    let taskMaster = doc.data().taskMaster;
    let complete = doc.data().complete;
    let kontenTugas = doc.data().kontenTugas;
    let perMinggu = doc.data().perMinggu;
    let perHari = doc.data().perHari;
    let perJam = doc.data().perJam;
    let perMenit = doc.data().perMenit;
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let waktuRilis = doc.data().waktuRilis;
    let waktuPenyelesaian = doc.data().waktuPenyelesaian;
    let waktuDeadline = new Date(waktuRilis + (perMinggu * 7 * 24 * 60 * 60 * 1000) + (perHari * 24 * 60 * 60 * 1000) + (perJam * 60 * 60 * 1000) + (perMenit * 60 * 1000));
    let hhDeadline = String(new Date(waktuDeadline).getHours()).padStart(2, '0');
    let msDeadline = String(new Date(waktuDeadline).getMinutes()).padStart(2, '0');
    let ddDealine = String(new Date(waktuDeadline).getDate()).padStart(2, '0');
    let mmDeadline = bulan[new Date(waktuDeadline).getMonth()];
    let yyyyDeadline = new Date(waktuDeadline).getFullYear();
    waktuDeadline = hhDeadline + ':' + msDeadline + " / " + ddDealine + ' ' + mmDeadline + ' ' + yyyyDeadline;   
    let prioritasTugas = doc.data().prioritasTugas; 
    document.querySelector('#nama-peserta-tugas' + doc.id).innerHTML = namaPeserta;
    document.querySelector('#konten-tugas' + doc.id).value = kontenTugas.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#konten-tugas-tampilan' + doc.id).innerHTML = kontenTugas;
    document.querySelector('#waktu-deadline-tugas' + doc.id).innerHTML = waktuDeadline;
    document.querySelector('#per-minggu' + doc.id).value = perMinggu;
    document.querySelector('#per-hari' + doc.id).value = perHari;
    document.querySelector('#per-jam' + doc.id).value = perJam;
    document.querySelector('#per-menit' + doc.id).value = perMenit;
    document.querySelector('#prioritas-tugas' + doc.id).querySelectorAll('option').forEach((item, index) => {
        if(item.innerHTML == prioritasTugas){
            document.querySelector('#prioritas-tugas' + doc.id).selectedIndex = index;
        }
    })
    document.querySelector('#prioritas-tugas-tampilan' + doc.id).innerHTML = `<div class="prioritas-tugas-${prioritasTugas.toLowerCase()}">${prioritasTugas}</div>`;
    if(complete){
        if(document.querySelector('[data-id="' + doc.id + '"]').hasAttribute('task-incomplete')){
            document.querySelector('#checkbox-tugas' + doc.id).checked = true;
            let hhPenyelesaian = String(new Date(waktuPenyelesaian).getHours()).padStart(2, '0');
            let msPenyelesaian = String(new Date(waktuPenyelesaian).getMinutes()).padStart(2, '0');
            let ddPenyelesaian = String(new Date(waktuPenyelesaian).getDate()).padStart(2, '0');
            let mmPenyelesaian = bulan[new Date(waktuPenyelesaian).getMonth()];
            let yyyyPenyelesaian = new Date(waktuPenyelesaian).getFullYear();
            waktuPenyelesaian = hhPenyelesaian + ':' + msPenyelesaian + " / " + ddPenyelesaian + ' ' + mmPenyelesaian + ' ' + yyyyPenyelesaian;                
            document.querySelector('#waktu-penyelesaian-tugas' + doc.id).innerHTML = waktuPenyelesaian;
            document.querySelector('[data-id="' + doc.id + '"]').removeAttribute('task-incomplete');
            document.querySelector('[data-id="' + doc.id + '"]').setAttribute('task-complete', '');
            listTugasSelesaiPeserta.append(document.querySelector('[data-id="' + doc.id + '"]'))               
        }
    } else {
        if(document.querySelector('[data-id="' + doc.id + '"]').hasAttribute('task-complete')){
            document.querySelector('#checkbox-tugas' + doc.id).checked = false;   
            document.querySelector('#waktu-penyelesaian-tugas' + doc.id).innerHTML = '-'
            document.querySelector('[data-id="' + doc.id + '"]').removeAttribute('task-complete');
            document.querySelector('[data-id="' + doc.id + '"]').setAttribute('task-incomplete', '');
            listTugasPendingPeserta.prepend(document.querySelector('[data-id="' + doc.id + '"]'))
        }
    }

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
                db.collection('kesalahan').doc(doc.id).update({
                    tanggal : tanggalUpdate,
                    kontenKesalahan : kontenKesalahanUpdate.replace(/\n\r?/g, '<br/>')
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
            db.collection('kesalahan').doc(doc.id).delete();
            $('#modalkesalahan' + doc.id).modal('hide');
        }
    })

    $(document).ready(function(){
        db.collection('kesalahan').onSnapshot(snapshot =>{
            let items = $('#list-kesalahan-peserta > .kesalahanseseorang').get();
            items.sort(function(a, b){
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
    let mm = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + '/' + mm + '/' + yyyy;
    let sortir = tanggal.split('/');
    let sortirTanggal = sortir[2] + sortir[1] + sortir[0];
    let div = document.querySelector('.dokumentasi-kesalahan-peserta' + doc.id);
    div.setAttribute('data-date', sortirTanggal);
    let kontenKesalahan = doc.data().kontenKesalahan;
    document.querySelector('#tanggal-kesalahan' + doc.id).value = yyyy + '-' + mm + '-' + dd;
    document.querySelector('#konten-kesalahan' + doc.id).innerHTML = kontenKesalahan.replace(/<br\s*[\/]?>/gi, "\n");
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
                db.collection('achievement').doc(doc.id).update({
                    tanggal : tanggalUpdate,
                    kontenPencapaian : kontenPencapaianUpdate.replace(/\n\r?/g, '<br/>')
                }).then(() => {
                    formEdit.style.display = "none";
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
            db.collection('achievement').doc(doc.id).delete();
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
    document.querySelector('#tanggal-pencapaian' + doc.id).value = tampilanTanggal;
    document.querySelector('#konten-pencapaian' + doc.id).innerHTML = kontenPencapaian.replace(/<br\s*[\/]?>/gi, "\n");
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

    setInterval(function(){
        tanggalSekarang = new Date().getTime();
        perbandinganWaktu = tanggalSekarang - tanggal;
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
            perbandinganWaktu = perhitunganHari + ' hari yang lalu';
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
        $('#waktu-pengumuman-dibuat' + doc.id).text(perbandinganWaktu);
        $('#perbandingan-baru' + doc.id).text(perbandinganBaru);
    },0)

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
            db.collection('pengumuman').doc(doc.id).update({
                judulPengumuman : judulPengumumanUpdate,
                kontenPengumuman : kontenPengumumanUpdate.replace(/\n\r?/g, '<br/>')                
            }).then(() => {
                formEdit.style.display = "none";
            })
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus pengumuman ini?');
        if(konfirmasi == true){
            db.collection('pengumuman').doc(doc.id).delete();
            $('#modalpengumuman' + doc.id).modal('hide');
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
    document.querySelector('#judul-pengumuman' + doc.id).value = judulPengumuman;
    document.querySelector('#konten-pengumuman' + doc.id).innerHTML = kontenPengumuman.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#judul-pengumuman-tampilan' + doc.id).innerHTML = judulPengumuman;
    document.querySelector('#konten-pengumuman-tampilan' + doc.id).innerHTML = kontenPengumuman;
    document.querySelector('#judul-pengumuman-body' + doc.id).innerHTML = judulPengumuman;
    document.querySelector('#konten-pengumuman-body' + doc.id).innerHTML = kontenPengumuman;
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
        db.collection('menu').add({
            tanggal : new Date().getTime(),
            namaMenu : daftarMenu['nama-menu' + doc.id].value,
            linkMenu : daftarMenu['link-menu' + doc.id].value,
            kategoriMenu : doc.id
        }).then(() => {
            $('#modalmenu' + doc.id).modal('hide');
            document.querySelector('#tambah-menu' + doc.id).reset();
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
        db.collection('kategoriMenu').doc(doc.id).update({
            namaKategoriMenu : namaKategoriMenuUpdate
        }).then(() => {
            $('#modalkategorimenu' + doc.id).modal('hide');
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus kategori menu ini?');
        if(konfirmasi == true){
            db.collection('menu').get().then(function(querySnapshot){
                querySnapshot.docs.map((items) => {
                    if(items.data().kategoriMenu == item.id){
                        db.collection('menu').doc(items.id).delete();
                    }
                }).then(() => {
                    db.collection('kategoriMenu').doc(doc.id).delete();
                })
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
    document.querySelector('#nama-kategori-menu' + doc.id).value = namaKategoriMenu;
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
        db.collection('menu').doc(doc.id).update({
            namaMenu : namaMenuUpdate,
            linkMenu : linkMenuUpdate
        }).then(() => {
            $('#modalmenu' + kategoriMenu).modal('hide');
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus menu ini?');
        if(konfirmasi == true){
            db.collection('menu').doc(doc.id).delete();
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
    document.querySelector('#nama-menu' + doc.id).value = namaMenu;
    document.querySelector('#link-menu' + doc.id).value = linkMenu;
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
    let opsiKetiga = document.createElement('option');
    let ekspedisiCetakLabel = document.createElement('div');
    opsi.setAttribute('id', 'ekspedisicetaklabel' + doc.id);
    opsiKedua.setAttribute('id', 'ekspedisitransaksiberjalan' + doc.id);
    opsiKetiga.setAttribute('id', 'ekspedisiformatorder' + doc.id);
    div.classList.add('dokumentasi-ekspedisi-cetak-label' + doc.id, 'ekspedisicetaklabel')
    div.setAttribute('data-id', doc.id);
    let namaEkspedisiCetakLabel = doc.data().namaEkspedisiCetakLabel;
    let tanggal = doc.data().tanggal;
    div.setAttribute('data-date', tanggal);
    opsi.setAttribute('data-date', tanggal);
    opsiKedua.setAttribute('data-date', tanggal);
    opsiKetiga.setAttribute('data-date', tanggal);  
    div.innerHTML = `
    <div id="nama-ekspedisi-cetak-label-tampilan${doc.id}" class="nama-ekspedisi-cetak-label-tampilan">${namaEkspedisiCetakLabel}</div>
    <i class='fas fa-pen edit-ekspedisi-cetak-label' id='edit${doc.id}' data-target="#modalekspedisicetaklabel${doc.id}" data-toggle="modal"></i>
    <i class='fas fa-trash-alt hapus-ekspedisi-cetak-label' id="hapus${doc.id}"></i>
    `
    opsi.innerHTML = namaEkspedisiCetakLabel;
    opsiKedua.innerHTML = namaEkspedisiCetakLabel;
    opsiKetiga.innerHTML = namaEkspedisiCetakLabel;

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
    document.querySelector('#ekspedisi-format-order').options[0].parentNode.insertBefore(opsiKetiga, document.querySelector('#ekspedisi-format-order').options[0].nextSibling);

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

    $(document).ready(function() {
        db.collection('ekspedisiCetakLabel').onSnapshot(snapshot =>{
            let items = $('#ekspedisi-format-order > option').get();
            items.sort(function(a, b) {
                let keyA = $(a).data('date');
                let keyB = $(b).data('date');
                if (keyA > keyB) return 1;
                if (keyA < keyB) return -1;
                return 0;
            })
            let daftarOpsiEkspedisiFormatOrder = $('#ekspedisi-format-order');
            $.each(items, function(i, div) {
                daftarOpsiEkspedisiFormatOrder.append(div)
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
            db.collection('ekspedisiCetakLabel').doc(doc.id).delete();
        }
    })

    let formEdit = document.querySelector('#tambah-ekspedisi-cetak-label' + doc.id);
    formEdit.addEventListener('submit', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        let namaEkspedisiCetakLabelUpdate = document.querySelector('#nama-ekspedisi-cetak-label' + doc.id).value;
        db.collection('ekspedisiCetakLabel').doc(doc.id).update({
            namaEkspedisiCetakLabel : namaEkspedisiCetakLabelUpdate
        }).then(() => {
            $('#modalekspedisicetaklabel' + doc.id).modal('hide');
        })
    })    

}

function renderUpdateEkspedisiCetakLabel(doc){
    let namaEkspedisiCetakLabel = doc.data().namaEkspedisiCetakLabel;
    document.querySelector('#nama-ekspedisi-cetak-label' + doc.id).value = namaEkspedisiCetakLabel;
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

    setInterval(function(){
        tanggalSekarang = new Date().getTime();
        perbandinganWaktu = tanggalSekarang - tanggal;
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
        $('#waktu-luncur-catatan' + doc.id).text(perbandinganWaktu)
    },0);

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus catatan ini?');
        if(konfirmasi == true){
            db.collection('catatan').doc(doc.id).delete();
        }
    })

    let formEdit = document.querySelector('#tambah-catatan' + doc.id);
    formEdit.addEventListener('submit', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        let kontenCatatanUpdate = document.querySelector('#konten-catatan' + doc.id).value;
        db.collection('catatan').doc(doc.id).update({
            kontenCatatan : kontenCatatanUpdate.replace(/\n\r?/g, '<br/>')
        }).then(() => {
            $('#modalcatatan' + doc.id).modal('hide');
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
    document.querySelector('#konten-catatan' + doc.id).innerHTML = kontenCatatan.replace(/<br\s*[\/]?>/gi, "\n");
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
            db.collection('indent').doc(doc.id).update({
                kontenIndent : kontenIndentUpdate.replace(/\n\r?/g, '<br/>'),
                produkIndent : produkIndentUpdate.replace(/\n\r?/g, '<br/>'),
                namaCustomer : namaCustomerUpdate,
                kontakCustomer : kontakCustomerUpdate
            }).then(() =>{
                formEdit.style.display = "none";
            })
        })
    })


    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data indent cust ini?');
        if(konfirmasi == true){
            db.collection('indent').doc(doc.id).delete();
            $('#modalindentcust' + doc.id).modal('hide')
        }
    })

}

function renderUpdateIndent(doc){
    let kontenIndent = doc.data().kontenIndent;
    let produkIndent = doc.data().produkIndent;
    let namaCustomer = doc.data().namaCustomer;
    let kontakCustomer = doc.data().kontakCustomer;
    document.querySelector('#nama-customer-indent-cust' + doc.id).value = namaCustomer;
    document.querySelector('#kontak-customer-indent-cust' + doc.id).value = kontakCustomer;
    document.querySelector('#produk-indent-cust' + doc.id).innerHTML = produkIndent.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#konten-indent-cust' + doc.id).innerHTML = kontenIndent.replace(/<br\s*[\/]?>/gi, "\n");
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
                <div class='refresh-perpindahan-barang dropdown-item' id="refresh${doc.id}"><i class="fa fa-repeat"></i> Refresh</div>
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
        renderPeringatanPerpindahan();
    } else {
        listPerpindahanBarangPending.appendChild(div);
        document.querySelector('#jumlah-perpindahan-pending').innerHTML = Number(document.querySelector('#jumlah-perpindahan-pending').innerHTML) + 1;
    }

        function renderPeringatanPerpindahan(){
            document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Hari Ini';
            if(!document.querySelector('#peringatan-perpindahan') && !document.querySelector('#peringatan-perpindahan-kedua')){
                let peringatan = document.createElement('div');
                let peringatanKedua = document.createElement('div');
                peringatan.setAttribute('id', 'peringatan-perpindahan');
                peringatanKedua.setAttribute('id', 'peringatan-perpindahan-kedua');  
                peringatan.innerHTML = `
                <i class="fa fa-info-circle ikon-notice"></i> <span style="font-weight:bold;">NOTICE</span> : Terdapat <span id="jumlah-perpindahan-hari-ini">1</span> perpindahan yang telah terjadwalkan pada hari ini!
                `
                peringatanKedua.innerHTML = `
                <div>
                <div><i class="fa fa-warning"></i> <span style="font-weight:bold;">Announcement</span></div>
                Terdapat <span id="jumlah-perpindahan-hari-ini-kedua">1</span> perpindahan yang telah terjadwalkan pada hari ini! <a id="link-lihat-perpindahan" class="tab-halaman" data-toggle="pill" href="#halaman-perpindahan-barang" role="tab" aria-controls="halaman-perpindahan-barang" aria-selected="true">Lihat Sekarang <i id="ikon-link-lihat-perpindahan" class='fas fa-paper-plane'></i></a>
                </div>
                <div id="hapus-peringatan-perpindahan-kedua"></div>
                `
                document.querySelector('#tombol-tambah-lihat-perpindahan-kedua').parentNode.insertBefore(peringatan, document.querySelector('#tombol-tambah-lihat-perpindahan-kedua').nextSibling);
                document.querySelector('#kalender').parentNode.insertBefore(peringatanKedua, document.querySelector('#kalender'));            

                let hapusPeringatanPerpindahanKedua = document.querySelector('#hapus-peringatan-perpindahan-kedua');
                hapusPeringatanPerpindahanKedua.addEventListener('click', function(e){
                    e.stopImmediatePropagation();
                    document.querySelector('#peringatan-perpindahan-kedua').remove();
                    if(!document.querySelector('#peringatan-perpindahan-kedua')){
                        document.querySelector('#kalender').style.setProperty('margin-top', '10px', 'important')    
                    }     
                })

                if(document.querySelector('#peringatan-perpindahan-kedua')){
                    if(window.innerWidth >= 650){
                        document.querySelector('#kalender').style.setProperty('margin-top', '90px', 'important')
                    } else if(window.innerWidth <= 650){               
                        document.querySelector('#kalender').style.setProperty('margin-top', '112px', 'important')
                    }
                }

                window.addEventListener('resize', function(e){
                    if(document.querySelector('#peringatan-perpindahan-kedua')){
                        if(window.innerWidth >= 650){
                            document.querySelector('#kalender').style.setProperty('margin-top', '90px', 'important')
                        } else if(window.innerWidth <= 650){               
                            document.querySelector('#kalender').style.setProperty('margin-top', '112px', 'important')
                        }
                    }
                })
            } else if(document.querySelector('#peringatan-perpindahan') && document.querySelector('#peringatan-perpindahan-kedua')){
                [document.querySelector('#jumlah-perpindahan-hari-ini'), document.querySelector('#jumlah-perpindahan-hari-ini-kedua')].forEach(item => {
                    item.innerHTML = Number(item.innerHTML) + 1;
                })
            }
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

    let refresh = document.querySelector('#refresh' + doc.id);
    refresh.addEventListener('click', (e) => {
        e.stopPropagation();
        db.collection('perpindahan').doc(doc.id).get().then(function(item){
            let newTanggalPerpindahan = item.data().tanggal;
            let newKontenPerpindahan = item.data().kontenPerpindahan;
            let ddPerpindahan = String(new Date(newTanggalPerpindahan).getDate()).padStart(2, '0');
            let mmPerpindahan = String(new Date(newTanggalPerpindahan).getMonth() + 1).padStart(2, '0');            
            let yyyyPerpindahan = new Date(newTanggalPerpindahan).getFullYear();
            let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            let mmPerpindahanKedua = bulan[new Date(newTanggalPerpindahan).getMonth()]            
            newTanggalPerpindahan = ddPerpindahan + '-' + mmPerpindahan + '-' + yyyyPerpindahan;
            let ddSekarang = String(new Date().getDate()).padStart(2, '0');
            let mmSekarang = String(new Date().getMonth() + 1).padStart(2, '0');
            let yyyySekarang = new Date().getFullYear();
            let tanggalSekarang = ddSekarang + '-' + mmSekarang + '-' + yyyySekarang;
            let newTampilanTanggal = yyyyPerpindahan + '-' + mmPerpindahan + '-' + ddPerpindahan;
            if(document.querySelector('#perpindahanbarang' + doc.id).parentElement == listPerpindahanBarang){
                if(newTanggalPerpindahan == tanggalSekarang){
                    document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Hari Ini';
                } else {
                    document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Tanggal ' + ddPerpindahan + ' ' + mmPerpindahan + ' ' + yyyyPerpindahan;
                    listPerpindahanBarangPending.appendChild(document.querySelector('#perpindahanbarang' + doc.id));
                    [document.querySelector('#jumlah-perpindahan-hari-ini'), document.querySelector('#jumlah-perpindahan-hari-ini-kedua')].forEach(item => {
                        item.innerHTML = Number(item.innerHTML) - 1;
                    })
                    if(listPerpindahanBarang.childNodes.length == 0){
                        [document.querySelector('#peringatan-perpindahan'), document.querySelector('#peringatan-perpindahan-kedua')].forEach(item =>{
                            item.remove();
                        })
                    }                                        
                    document.querySelector('#jumlah-perpindahan-pending').innerHTML = Number(document.querySelector('#jumlah-perpindahan-pending').innerHTML) + 1;
                }
            } else if(document.querySelector('#perpindahanbarang' + doc.id).parentElement == listPerpindahanBarangPending){
                if(newTanggalPerpindahan == tanggalSekarang){
                    renderPeringatanPerpindahan();
                    listPerpindahanBarang.appendChild(document.querySelector('#perpindahanbarang' + doc.id));
                    document.querySelector('#jumlah-perpindahan-pending').innerHTML = Number(document.querySelector('#jumlah-perpindahan-pending').innerHTML) - 1;
                } else {
                    document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Tanggal ' + ddPerpindahan + ' ' + mmPerpindahanKedua + ' ' + yyyyPerpindahan;
                }                
            }
            document.querySelector('#tanggal-perpindahan-barang' + doc.id).value = newTampilanTanggal;;
            document.querySelector('#konten-perpindahan-barang' + doc.id).value = newKontenPerpindahan.replace(/<br\s*[\/]?>/gi, "\n");
            document.querySelector('#konten-perpindahan-barang-tampilan' + doc.id).innerHTML = newKontenPerpindahan;
        })
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
        if(tanggalUpdate == ''){
            tanggalUpdate = new Date().getTime();
        }
        let kontenPerpindahanUpdate = document.querySelector('#konten-perpindahan-barang' + doc.id).value;
        db.collection('perpindahan').doc(doc.id).update({
            tanggal : tanggalUpdate,
            kontenPerpindahan : kontenPerpindahanUpdate.replace(/\n\r?/g, '<br/>')
        }).then(() =>{
            $('#modalperpindahanbarang' + doc.id).modal('hide')
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

function renderHapusPerpindahan(doc){
    if(document.querySelector('#perpindahanbarang' + doc.id).parentElement == document.querySelector('#list-perpindahan-barang-pending')){
        document.querySelector('#jumlah-perpindahan-pending').innerHTML = Number(document.querySelector('#jumlah-perpindahan-pending').innerHTML) - 1;
    } else {
        if(listPerpindahanBarang.childNodes.length == 1){
            [document.querySelector('#peringatan-perpindahan'), document.querySelector('#peringatan-perpindahan-kedua')].forEach(item =>{
                item.remove();
                document.querySelector('#kalender').style.setProperty('margin-top', '10px', 'important');
            })
        } else {
            [document.querySelector('#jumlah-perpindahan-hari-ini'), document.querySelector('#jumlah-perpindahan-hari-ini-kedua')].forEach(item => {
                item.innerHTML = Number(item.innerHTML) - 1;
            })
        }
    }
}

function renderUpdatePerpindahan(doc){
    let newTanggalPerpindahan = doc.data().tanggal;
    let newKontenPerpindahan = doc.data().kontenPerpindahan;
    let dd = String(new Date(newTanggalPerpindahan).getDate()).padStart(2, '0');
    let mm = String(new Date(newTanggalPerpindahan).getMonth() + 1).padStart(2, '0');    
    let yyyy = new Date(newTanggalPerpindahan).getFullYear();    
    let ddPerpindahan = String(new Date(newTanggalPerpindahan).getDate()).padStart(2, '0');
    let mmPerpindahan = String(new Date(newTanggalPerpindahan).getMonth() + 1).padStart(2, '0');            
    let yyyyPerpindahan = new Date(newTanggalPerpindahan).getFullYear();
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mmPerpindahanKedua = bulan[new Date(newTanggalPerpindahan).getMonth()]            
    newTanggalPerpindahan = ddPerpindahan + '-' + mmPerpindahan + '-' + yyyyPerpindahan;
    let ddSekarang = String(new Date().getDate()).padStart(2, '0');
    let mmSekarang = String(new Date().getMonth() + 1).padStart(2, '0');
    let yyyySekarang = new Date().getFullYear();
    let tanggalSekarang = ddSekarang + '-' + mmSekarang + '-' + yyyySekarang;
    document.querySelector('#tanggal-perpindahan-barang' + doc.id).value = yyyy + '-' + mm + '-' + dd;
    document.querySelector('#konten-perpindahan-barang' + doc.id).innerHTML = newKontenPerpindahan.replace(/<br\s*[\/]?>/gi, "\n");
        if(document.querySelector('#perpindahanbarang' + doc.id).parentElement == listPerpindahanBarang){
            if(newTanggalPerpindahan == tanggalSekarang){
                document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Hari Ini';
            } else {
                document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Tanggal ' + ddPerpindahan + ' ' + mmPerpindahan + ' ' + yyyyPerpindahan;
                listPerpindahanBarangPending.appendChild(document.querySelector('#perpindahanbarang' + doc.id));
                [document.querySelector('#jumlah-perpindahan-hari-ini'), document.querySelector('#jumlah-perpindahan-hari-ini-kedua')].forEach(item => {
                    item.innerHTML = Number(item.innerHTML) - 1;
                })
                if(listPerpindahanBarang.childNodes.length == 0){
                    [document.querySelector('#peringatan-perpindahan'), document.querySelector('#peringatan-perpindahan-kedua')].forEach(item =>{
                        item.remove();
                    })
                }                                        
                document.querySelector('#jumlah-perpindahan-pending').innerHTML = Number(document.querySelector('#jumlah-perpindahan-pending').innerHTML) + 1;
            }
        } else if(document.querySelector('#perpindahanbarang' + doc.id).parentElement == listPerpindahanBarangPending){
            if(newTanggalPerpindahan == tanggalSekarang){
                renderPeringatanPerpindahan();
                listPerpindahanBarang.appendChild(document.querySelector('#perpindahanbarang' + doc.id));
                document.querySelector('#jumlah-perpindahan-pending').innerHTML = Number(document.querySelector('#jumlah-perpindahan-pending').innerHTML) - 1;
            } else {
                document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Tanggal ' + ddPerpindahan + ' ' + mmPerpindahanKedua + ' ' + yyyyPerpindahan;
            }                
        }

    document.querySelector('#konten-perpindahan-barang-tampilan' + doc.id).innerHTML = newKontenPerpindahan;

        function renderPeringatanPerpindahan(){
            document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Hari Ini';
            if(!document.querySelector('#peringatan-perpindahan') && !document.querySelector('#peringatan-perpindahan-kedua')){
                let peringatan = document.createElement('div');
                let peringatanKedua = document.createElement('div');
                peringatan.setAttribute('id', 'peringatan-perpindahan');
                peringatanKedua.setAttribute('id', 'peringatan-perpindahan-kedua');  
                peringatan.innerHTML = `
                <i class="fa fa-info-circle ikon-notice"></i> <span style="font-weight:bold;">NOTICE</span> : Terdapat <span id="jumlah-perpindahan-hari-ini">1</span> perpindahan yang telah terjadwalkan pada hari ini!
                `
                peringatanKedua.innerHTML = `
                <div>
                <div><i class="fa fa-warning"></i> <span style="font-weight:bold;">Announcement</span></div>
                Terdapat <span id="jumlah-perpindahan-hari-ini-kedua">1</span> perpindahan yang telah terjadwalkan pada hari ini! <a id="link-lihat-perpindahan" class="tab-halaman" data-toggle="pill" href="#halaman-perpindahan-barang" role="tab" aria-controls="halaman-perpindahan-barang" aria-selected="true">Lihat Sekarang <i id="ikon-link-lihat-perpindahan" class='fas fa-paper-plane'></i></a>
                </div>
                <div id="hapus-peringatan-perpindahan-kedua"></div>
                `
                document.querySelector('#tombol-tambah-lihat-perpindahan-kedua').parentNode.insertBefore(peringatan, document.querySelector('#tombol-tambah-lihat-perpindahan-kedua').nextSibling);
                document.querySelector('#kalender').parentNode.insertBefore(peringatanKedua, document.querySelector('#kalender'));            

                let hapusPeringatanPerpindahanKedua = document.querySelector('#hapus-peringatan-perpindahan-kedua');
                hapusPeringatanPerpindahanKedua.addEventListener('click', function(e){
                    e.stopImmediatePropagation();
                    document.querySelector('#peringatan-perpindahan-kedua').remove();
                    if(!document.querySelector('#peringatan-perpindahan-kedua')){
                        document.querySelector('#kalender').style.setProperty('margin-top', '10px', 'important')    
                    }     
                })

                if(document.querySelector('#peringatan-perpindahan-kedua')){
                    if(window.innerWidth >= 650){
                        document.querySelector('#kalender').style.setProperty('margin-top', '90px', 'important')
                    } else if(window.innerWidth <= 650){               
                        document.querySelector('#kalender').style.setProperty('margin-top', '112px', 'important')
                    }
                }

                window.addEventListener('resize', function(e){
                    if(document.querySelector('#peringatan-perpindahan-kedua')){
                        if(window.innerWidth >= 650){
                            document.querySelector('#kalender').style.setProperty('margin-top', '90px', 'important')
                        } else if(window.innerWidth <= 650){               
                            document.querySelector('#kalender').style.setProperty('margin-top', '112px', 'important')
                        }
                    }
                })
            } else if(document.querySelector('#peringatan-perpindahan') && document.querySelector('#peringatan-perpindahan-kedua')){
                [document.querySelector('#jumlah-perpindahan-hari-ini'), document.querySelector('#jumlah-perpindahan-hari-ini-kedua')].forEach(item => {
                    item.innerHTML = Number(item.innerHTML) + 1;
                })
            }
        }    

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
                            <div id="biaya-admin-body${doc.id}">${"Rp " + Number(biayaAdmin).toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0}) + ",00"}</div>
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
            db.collection('tenorKalkulator').doc(doc.id).update({
                biayaAdmin : biayaAdminTenorKalkulatorUpdate,
                bunga : bungaTenorKalkulatorUpdate
            }).then(() =>{
                $('#modaltenor' + doc.id).modal('hide')
            })                    
        })
    })

    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus tenor ini?');
        if(konfirmasi == true){
            db.collection('tenorKalkulator').doc(doc.id).delete();
        }
    })

    let hapusKedua = document.querySelector('#hapuskedua' + doc.id);
    hapusKedua.addEventListener('click', (e) => {
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus tenor ini?');
        if(konfirmasi == true){
            db.collection('tenorKalkulator').doc(doc.id).delete();
            $('#modaltenor' + doc.id).modal('hide');
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
const previewPrintTransaksiBerjalan = document.querySelector('#preview-print-transaksi-berjalan');
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
                        <div id="print${doc.id}" class="btn btn-success print print-transaksi-berjalan">Print Label</div>
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

    db.collection('ekspedisiCetakLabel').get().then(function(querySnapshot){
        querySnapshot.docs.map(item => {
            let option = document.createElement('option');
            option.setAttribute('data-date', item.data().tanggal);
            if(ekspedisiTransaksi == item.data().namaEkspedisiCetakLabel){
                option.setAttribute('selected', 'selected');
            }
            option.innerHTML = item.data().namaEkspedisiCetakLabel;
            document.querySelector('#ekspedisi-transaksi-berjalan' + doc.id).options[0].parentNode.insertBefore(option, document.querySelector('#ekspedisi-transaksi-berjalan' + doc.id).options[0].nextSibling);

            $(document).ready(function() {
                db.collection('ekspedisiCetakLabel').onSnapshot(snapshot =>{
                    let items = $('#ekspedisi-transaksi-berjalan' + doc.id + ' > option').get();
                    items.sort(function(a, b) {
                        let keyA = $(a).data('date');
                        let keyB = $(b).data('date');
                        if (keyA > keyB) return 1;
                        if (keyA < keyB) return -1;
                        return 0;
                    })
                    let daftarOpsiEkspedisiTransaksiBerjalan = $('#ekspedisi-transaksi-berjalan' + doc.id);
                    $.each(items, function(i, div) {
                        daftarOpsiEkspedisiTransaksiBerjalan.append(div)
                    })
                })
            })   
            
        })
    })

    let print = document.querySelector('#print' + doc.id);
    print.addEventListener('click', function(e){
        e.stopPropagation();
        db.collection('transaksiBerjalan').doc(doc.id).get().then(function(docs){
            let newNamaCustomer = docs.data().namaCustomer;
            let newKontakCustomer = docs.data().kontakCustomer;
            let newAlamatCustomer = docs.data().alamatCustomer;
            let newNominalTransaksi = docs.data().nominalTransaksi;
            let newEkspedisiTransaksi = docs.data().ekspedisiTransaksi;
            let newProdukTransaksi = docs.data().produkTransaksi;
            let newKeteranganTransaksi = docs.data().keteranganTransaksi;
            let newTanggalTransaksi = docs.data().tanggalTransaksi;
            if(newKontakCustomer == 0 || newAlamatCustomer == 0 || newEkspedisiTransaksi == 0 || newProdukTransaksi == 0){
                alert('Pastikan data yang berkaitan mengenai ekspedisi dan produk transaksi maupun kontak dan alamat customer itu ada!')
            } else {
                let potongan = document.createElement('div');
                potongan.setAttribute('id', 'potongan-kertas-transaksi-berjalan' + doc.id)
                potongan.classList.add('potongan-kertas-transaksi-berjalan')
                potongan.innerHTML = `
                <div class="super-header-cetak">
                    <img src="logo.png" class="logo-cetak">
                    <div class="label-pengiriman">Label Pengiriman</div>          
                </div>
                <div class="header-cetak">
                    <div class="penjual">From</div>
                    <div>:</div>
                    <div>
                        <div class="nama-penjual"><span class="nama-logo">GALAXYCAMERA.ID</span></div>
                        <div class="alamat-penjual">Mall Metropolis Townsquare, Lantai Dasar Blok GC1 No.7, Cikokol, Tangerang</div>
                        <div class="kontak-penjual">082111311131</div>
                    </div>
                </div>
                <div class="body-cetak">
                    <div class="ship-to">
                        <div>Ship to</div>
                        <div>:</div>
                        <div>
                            <div class="nama-pembeli">${newNamaCustomer}</div>
                            <div class="alamat-pembeli">${newAlamatCustomer}</div>
                            <div class="kontak-pembeli">${newKontakCustomer}</div>
                        </div>
                        <div>Ekspedisi</div>
                        <div>:</div>
                        <div class="ekspedisi-terpilih">${newEkspedisiTransaksi}</div>
                    </div>
                </div>
                <div class="footer-cetak">
                    <div class="keterangan-footer">Terima Kasih Sudah Berbelanja di <span class="nama-logo">GALAXYCAMERA.ID</span></div>
                    <div class="keterangan-footer-kedua">
                        <div class="footer-cetak-label-produk">Produk :</div>
                        <div class="footer-cetak-label-konten-produk">${newProdukTransaksi}</div>
                    </div>
                </div>
                `
            previewPrintTransaksiBerjalan.appendChild(potongan);
            document.body.style.visibility = 'hidden';
            document.querySelector('#preview-print-transaksi-berjalan').style.visibility = 'visible';
            document.body.style.setProperty("background-color", "white", "important");
            document.querySelector('#tombol-burger').style.visibility = 'hidden';
            document.querySelector('#preview-print-transaksi-berjalan').style.position = 'absolute';
            document.querySelector('#preview-print-transaksi-berjalan').style.width = '100%';
            document.querySelector('#preview-print-transaksi-berjalan').style.top = '0';
            document.querySelector('#preview-print-transaksi-berjalan').style.left = '0';
            document.querySelector('#myTabContent').style.marginLeft = '0';
            setTimeout(function(){
                window.print();
                document.querySelector('#tombol-burger').style.visibility = 'visible';
                document.body.style.visibility = 'visible';
                document.querySelector('#preview-print-transaksi-berjalan').style.position = 'relative';
                document.body.style.setProperty("background-color", "#eeeeee", "important");
                setTimeout(function(){
                document.querySelector('#darken').style.backgroundColor = '0';
                document.querySelector('#darken').style.width = '0';
                document.querySelector('#darken').style.height = '0';
                document.querySelector('#darken').style.position = '0';
                document.querySelector('#darken').style.opacity = '0';
                document.querySelector('#darken').style.zIndex = '0';
                },0)
                document.querySelector('#potongan-kertas-transaksi-berjalan' + doc.id).remove();
            },1000)
            }
        })
    })

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
            db.collection('transaksiBerjalan').doc(doc.id).delete();
            $('#modaltransaksiberjalan' + doc.id).modal('hide');
        }
    })

    $(document).ready(function() {
        db.collection('transaksiBerjalan').onSnapshot(snapshot =>{
            let items = $('#list-transaksi-berjalan > .transaksi-berjalan').get();
            items.sort(function(a, b) {
                let keyA = $(a).data('date');
                let keyB = $(b).data('date');
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            })
            let daftarTransaksiBerjalan = $('#list-transaksi-berjalan');
            $.each(items, function(i, div) {
                daftarTransaksiBerjalan.append(div)
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
    document.querySelector('#nominal-transaksi-table' + doc.id).innerHTML = "Rp " + Number(nominalTransaksi).toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0}) + ",00";
    document.querySelector('#nominal-transaksi-body' + doc.id).innerHTML = "Rp " + Number(nominalTransaksi).toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0}) + ",00";
    document.querySelector('#ekspedisi-transaksi-body' + doc.id).innerHTML = ekspedisiTransaksi;
    document.querySelector('#produk-transaksi-table' + doc.id).innerHTML = produkTransaksi;
    document.querySelector('#produk-transaksi-body' + doc.id).innerHTML = produkTransaksi;
    document.querySelector('#keterangan-transaksi-table' + doc.id).innerHTML = keteranganTransaksi;
    document.querySelector('#keterangan-transaksi-body' + doc.id).innerHTML = keteranganTransaksi;
    document.querySelector('#tanggal-transaksi-table' + doc.id).innerHTML = tanggalTransaksi;
    document.querySelector('#tanggal-transaksi-body' + doc.id).innerHTML = tanggalTransaksi;
    document.querySelector('#tanggal-transaksi-berjalan' + doc.id).value = tampilanTanggal;
    document.querySelector('#customer-transaksi-berjalan' + doc.id).value = namaCustomer;
    document.querySelector('#kontak-transaksi-berjalan' + doc.id).value = kontakCustomer;
    document.querySelector('#nominal-transaksi-berjalan' + doc.id).value = nominalTransaksi;
    let pilihanEkspedisi = document.querySelector('#ekspedisi-transaksi-berjalan' + doc.id);
    let opsiEkspedisi;
    for(let x = 0; x<pilihanEkspedisi.options.length; x++){
        opsiEkspedisi = pilihanEkspedisi.options[x];
        if(opsiEkspedisi.value == ekspedisiTransaksi){
            opsiEkspedisi.setAttribute('selected', 'selected');
        }
    }
    document.querySelector('#alamat-transaksi-berjalan' + doc.id).innerHTML = alamatCustomer.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#produk-transaksi-berjalan' + doc.id).innerHTML = produkTransaksi.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#keterangan-transaksi-berjalan' + doc.id).innerHTML = keteranganTransaksi.replace(/<br\s*[\/]?>/gi, "\n");

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
            db.collection('returPending').doc(doc.id).delete();
            $('#modalretur' + doc.id).modal('hide')
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
    document.querySelector('#customer-retur' + doc.id).value = namaCustomer;
    document.querySelector('#kontak-retur' + doc.id).value = kontakCustomer;
    document.querySelector('#produk-retur' + doc.id).innerHTML = produkRetur.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#keluhan-retur' + doc.id).innerHTML = keluhanCustomer.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#keterangan-retur' + doc.id).innerHTML = keteranganRetur.replace(/<br\s*[\/]?>/gi, "\n");
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
            db.collection('returSelesai').doc(doc.id).delete();
            $('#modalretur' + doc.id).modal('hide')
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
    document.querySelector('#customer-retur' + doc.id).value = namaCustomer;
    document.querySelector('#kontak-retur' + doc.id).value = kontakCustomer;
    document.querySelector('#produk-retur' + doc.id).innerHTML = produkRetur.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#keluhan-retur' + doc.id).innerHTML = keluhanCustomer.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#keterangan-retur' + doc.id).innerHTML = keteranganRetur.replace(/<br\s*[\/]?>/gi, "\n");
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
            db.collection('returDealerPending').doc(doc.id).delete();
            $('#modalreturdealer' + doc.id).modal('hide')
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
    document.querySelector('#dealer-retur' + doc.id).value = namaDealer;
    document.querySelector('#produk-retur-dealer' + doc.id).innerHTML = produkRetur.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#keterangan-retur-dealer' + doc.id).innerHTML = keteranganRetur.replace(/<br\s*[\/]?>/gi, "\n");
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
            db.collection('returDealerSelesai').doc(doc.id).delete();
            $('#modalreturdealer' + doc.id).modal('hide')
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
    document.querySelector('#dealer-retur' + doc.id).value = namaDealer;
    document.querySelector('#produk-retur-dealer' + doc.id).innerHTML = produkRetur.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#keterangan-retur-dealer' + doc.id).innerHTML = keteranganRetur.replace(/<br\s*[\/]?>/gi, "\n");    
    document.querySelector('#dealer-retur-tampilan' + doc.id).innerHTML = namaDealer;
    document.querySelector('#produk-retur-dealer-tampilan' + doc.id).innerHTML = produkRetur;
    document.querySelector('#keterangan-retur-dealer-tampilan' + doc.id).innerHTML = keteranganRetur;
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

const listPedoman = document.querySelector('#list-pedoman-galaxy');
const modalPedoman = document.querySelector('#modal-edit-pedoman-galaxy');
function renderPedoman(doc){
    let div = document.createElement('div');
    let pedoman = document.createElement('div')
    let tanggal = doc.data().tanggal;
    let judul = doc.data().judul;
    let keterangan = doc.data().keterangan;
    div.setAttribute('data-id', doc.id);
    div.setAttribute('id', 'pedoman' + doc.id);
    div.setAttribute('data-date', tanggal);
    let keteranganTampilan, keteranganLainnya;
    if(keterangan.replace(/<br\s*[\/]?>/gi, "\n").length > 600){
        if(keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0,299).split(/\r\n|\r|\n/).length > 1){
            keteranganTampilan = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0, 249);
            keteranganLainnya = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(249, keterangan.replace(/<br\s*[\/]?>/gi, "\n").length)            
            div.innerHTML = `
            <div style="position:relative;background-color:white;margin:10px;border-radius:5px;">
                <div class="header-pedoman">
                <div class="judul-pedoman" id="judul-pedoman-tampilan${doc.id}">${judul}</div>
                    <div class="dropdown">        
                        <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
                        <div class="dropdown-menu menu-konfigurasi-pedoman">
                            <div class='edit-pedoman dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalpedoman${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                            <div class='hapus-pedoman dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
                        </div>
                    </div>
                </div>                
                <div style="padding:8px;">
                    <div id="keterangan-pedoman-tampilan${doc.id}" class="keterangan-pedoman">${keteranganTampilan.replace(/\n/g, '<br/>')}...</div>
                    <div class="btn btn-primary" id="read-more-pedoman${doc.id}">Read More</div>                
                </div>
            </div>
            `            
        } else {
            keteranganTampilan = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0, 299);
            keteranganLainnya = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(299, keterangan.replace(/<br\s*[\/]?>/gi, "\n").length)            
            div.innerHTML = `
            <div style="position:relative;background-color:white;margin:10px;border-radius:5px;">
                <div class="header-pedoman">
                <div class="judul-pedoman" id="judul-pedoman-tampilan${doc.id}">${judul}</div>
                    <div class="dropdown">        
                        <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
                        <div class="dropdown-menu menu-konfigurasi-pedoman">
                            <div class='edit-pedoman dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalpedoman${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                            <div class='hapus-pedoman dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
                        </div>
                    </div>
                </div>                
                <div style="padding:8px;">
                    <div id="keterangan-pedoman-tampilan${doc.id}" class="keterangan-pedoman">${keteranganTampilan.replace(/\n/g, '<br/>')}...</div>
                    <div class="btn btn-primary" id="read-more-pedoman${doc.id}">Read More</div>                
                </div>
            </div>
            `            
        }
    } else if(keterangan.replace(/<br\s*[\/]?>/gi, "\n").length >= 400 && keterangan.replace(/<br\s*[\/]?>/gi, "\n").length <= 600){
        if(keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0,249).split(/\r\n|\r|\n/).length > 1){
            keteranganTampilan = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0, 199);
            keteranganLainnya = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(199, keterangan.replace(/<br\s*[\/]?>/gi, "\n").length)            
            div.innerHTML = `
            <div style="position:relative;background-color:white;margin:10px;border-radius:5px;">
                <div class="header-pedoman">
                <div class="judul-pedoman" id="judul-pedoman-tampilan${doc.id}">${judul}</div>
                    <div class="dropdown">        
                        <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
                        <div class="dropdown-menu menu-konfigurasi-pedoman">
                            <div class='edit-pedoman dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalpedoman${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                            <div class='hapus-pedoman dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
                        </div>
                    </div>
                </div>                
                <div style="padding:8px;">
                    <div id="keterangan-pedoman-tampilan${doc.id}" class="keterangan-pedoman">${keteranganTampilan.replace(/\n/g, '<br/>')}...</div>
                    <div class="btn btn-primary" id="read-more-pedoman${doc.id}">Read More</div>                
                </div>
            </div>
            `            
        } else {
            keteranganTampilan = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0, 249);
            keteranganLainnya = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(249, keterangan.replace(/<br\s*[\/]?>/gi, "\n").length)            
            div.innerHTML = `
            <div style="position:relative;background-color:white;margin:10px;border-radius:5px;">
                <div class="header-pedoman">
                <div class="judul-pedoman" id="judul-pedoman-tampilan${doc.id}">${judul}</div>
                    <div class="dropdown">        
                        <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
                        <div class="dropdown-menu menu-konfigurasi-pedoman">
                            <div class='edit-pedoman dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalpedoman${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                            <div class='hapus-pedoman dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
                        </div>
                    </div>
                </div>                
                <div style="padding:8px;">
                    <div id="keterangan-pedoman-tampilan${doc.id}" class="keterangan-pedoman">${keteranganTampilan.replace(/\n/g, '<br/>')}...</div>
                    <div class="btn btn-primary" id="read-more-pedoman${doc.id}">Read More</div>                
                </div>
            </div>
            `             
        }
    } else {
        div.innerHTML = `
        <div style="position:relative;background-color:white;margin:10px;border-radius:5px;">
            <div class="header-pedoman">
                <div class="judul-pedoman" id="judul-pedoman-tampilan${doc.id}">${judul}</div>
                    <div class="dropdown">        
                        <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
                        <div class="dropdown-menu menu-konfigurasi-pedoman">
                            <div class='edit-pedoman dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalpedoman${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                            <div class='hapus-pedoman dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
                        </div>
                    </div>
                </div>
            <div style="padding:8px;">
                <div id="keterangan-pedoman-tampilan${doc.id}" class="keterangan-pedoman">${keterangan}</div>          
            </div>  
        </div>
        `     
    }
    pedoman.innerHTML = `
    <div class="modal fade" id="modalpedoman${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Pengaturan Pedoman</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="tambah-pedoman${doc.id}">
                        <div class="form-group">
                            <label class="col-form-label">Judul</label>
                            <input type="text" value="${judul}" class="form-control" id="judul-pedoman${doc.id}" autocomplete="off" required>
                        </div>
                        <div class="form-group">
                            <label>Keterangan</label>
                            <textarea oninput="auto_grow(this)" class="form-control" id="keterangan-pedoman${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${keterangan.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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
    listPedoman.appendChild(div);
    modalPedoman.appendChild(pedoman);

    let formEdit = document.querySelector('#tambah-pedoman' + doc.id);
    formEdit.addEventListener('submit', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        let judulUpdate = document.querySelector('#judul-pedoman' + doc.id).value;
        let keteranganUpdate = document.querySelector('#keterangan-pedoman' + doc.id).value;
        db.collection('pedoman').doc(doc.id).update({
            judul : judulUpdate,
            keterangan : keteranganUpdate.replace(/\n\r?/g, '<br/>')
        }).then(() => {
            $('#modalpedoman' + doc.id).modal('hide');
            })
        }) 

    let readMore = document.querySelector('#read-more-pedoman' + doc.id);
    if(readMore){
        readMore.addEventListener('click', function(e){
            e.stopPropagation();
            if(e.target.innerHTML == "Read More"){
                document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + keteranganLainnya.replace(/\n/g, '<br/>');
                e.target.innerHTML = "Read Less";
            } else {
                document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + '...';
                e.target.innerHTML = "Read More";
            }
        })
    }

    document.querySelector('#hapus' + doc.id).addEventListener('click', function(e){
        e.stopPropagation();
        let konfirmasi = confirm('Anda yakin ingin menghapus data pedoman ini?');
        if(konfirmasi == true){
            db.collection('pedoman').doc(doc.id).delete();
        }
    })

}

function renderUpdatePedoman(doc){
    let judul = doc.data().judul;
    let keterangan = doc.data().keterangan;
    let keteranganTampilan, keteranganLainnya;
    let div = document.createElement('div');
    document.querySelector('#read-more-pedoman' + doc.id).remove();
    div.setAttribute('id', 'read-more-pedoman' + doc.id);
    div.classList.add('btn', 'btn-primary');
    div.innerHTML = "Read More";
    document.querySelector('#judul-pedoman-tampilan' + doc.id).innerHTML = judul;
    if(keterangan.replace(/<br\s*[\/]?>/gi, "\n").length > 600){
        if(keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0,299).split(/\r\n|\r|\n/).length > 1){
            keteranganTampilan = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0, 249);
            keteranganLainnya = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(249, keterangan.replace(/<br\s*[\/]?>/gi, "\n").length)
            document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + '...';              
        } else {
            keteranganTampilan = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0, 299);
            keteranganLainnya = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(299, keterangan.replace(/<br\s*[\/]?>/gi, "\n").length)
            document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + '...';                 
        }
        document.querySelector('#keterangan-pedoman-tampilan' + doc.id).parentNode.insertBefore(div, document.querySelector('#keterangan-pedoman-tampilan' + doc.id).nextSibling)            
        let readMore = document.querySelector('#read-more-pedoman' + doc.id);
            readMore.addEventListener('click', function(e){           
                e.stopPropagation();
                if(e.target.innerHTML == "Read More"){
                    document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + keteranganLainnya.replace(/\n/g, '<br/>');
                    e.target.innerHTML = "Read Less";
                } else {
                    document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + '...';
                    e.target.innerHTML = "Read More";
                }
            })        
    } else if(keterangan.replace(/<br\s*[\/]?>/gi, "\n").length >= 400 && keterangan.replace(/<br\s*[\/]?>/gi, "\n").length <= 600){
        if(keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0,249).split(/\r\n|\r|\n/).length > 1){
            keteranganTampilan = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0, 199);
            keteranganLainnya = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(199, keterangan.replace(/<br\s*[\/]?>/gi, "\n").length)
            document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + '...';               
        } else {
            keteranganTampilan = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(0, 249);
            keteranganLainnya = keterangan.replace(/<br\s*[\/]?>/gi, "\n").slice(249, keterangan.replace(/<br\s*[\/]?>/gi, "\n").length)
            document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + '...';               
        }
        document.querySelector('#keterangan-pedoman-tampilan' + doc.id).parentNode.insertBefore(div, document.querySelector('#keterangan-pedoman-tampilan' + doc.id).nextSibling)            
        let readMore = document.querySelector('#read-more-pedoman' + doc.id);
            readMore.addEventListener('click', function(e){
                e.stopPropagation();
                if(e.target.innerHTML == "Read More"){
                    document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + keteranganLainnya.replace(/\n/g, '<br/>');
                    e.target.innerHTML = "Read Less";
                } else {
                    document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keteranganTampilan.replace(/\n/g, '<br/>') + '...';
                    e.target.innerHTML = "Read More";
                }
            }) 
    } else {
        document.querySelector('#keterangan-pedoman-tampilan' + doc.id).innerHTML = keterangan;
    }    

}

const listReqFakturPajakPending = document.querySelector('#list-req-faktur-pajak-pending');
const listReqFakturPajakSelesai = document.querySelector('#list-req-faktur-pajak-selesai');
const modalReqFakturPajak = document.querySelector('#modal-edit-req-faktur-pajak');
function renderReqFakturPajak(doc){
    let div = document.createElement('div');
    let request = document.createElement('div');
    div.setAttribute('data-id', doc.id)
    div.setAttribute('id', 'reqfakturpajak' + doc.id)
    div.classList.add('dokumentasi-req-faktur-pajak' + doc.id, 'req-faktur-pajak');
    let tanggal = doc.data().tanggal;
    let keterangan = doc.data().keterangan;
    let status = doc.data().status;
    div.setAttribute('data-date', new Date(tanggal).getTime())
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    mm = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let tampilanTanggal = yyyy + '-' + mm + '-' + dd;
    let tanggalRequest = yyyy + mm + dd;

    request.innerHTML = `
    <div class="modal fade" id="modalreqfakturpajak${doc.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Pengaturan Data Request Faktur Pajak</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="tambah-req-faktur-pajak${doc.id}">
                        <div class="form-group">
                            <label class="col-form-label">Tanggal Request <small>(Note :Tanggal akan otomatis mengikuti tanggal hari ini jika kolom dikosongkan)</small></label>
                            <input type="date" value="${tampilanTanggal}" class="form-control" id="tanggal-req-faktur-pajak${doc.id}" autocomplete="off">
                        </div>
                        <div class="form-group">              
                            <label>Keterangan</label>
                            <textarea oninput="auto_grow(this)" class="form-control" id="keterangan-req-faktur-pajak${doc.id}" style="display: block;overflow: hidden;resize: none;box-sizing: border-box;min-height:100px;" autocomplete="off" onfocus="auto_grow(this)" required>${keterangan.replace(/<br\s*[\/]?>/gi, "&#13;&#10;")}</textarea>
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
    modalReqFakturPajak.appendChild(request);

    switch(status){
        case 'PENDING':
        div.innerHTML = `
        <div class="header-req-faktur-pajak">
            <div class="judul-req-faktur-pajak">Request Faktur Pajak, Tanggal <span id="tanggal-req-faktur-pajak-tampilan${doc.id}">${tanggal}</span></div>
            <div class="dropdown">        
                <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
                <div class="dropdown-menu menu-konfigurasi-req-faktur-pajak">
                    <div class='selesai-req-faktur-pajak dropdown-item' id="selesai${doc.id}"><i class='fas fa-check'></i> Selesai</div>
                    <div class='copy-req-faktur-pajak dropdown-item' id="copy${doc.id}"><i class='far fa-copy'></i> Copy</div>
                    <div class='edit-req-faktur-pajak dropdown-item' id='edit${doc.id}' data-toggle='modal' data-target='#modalreqfakturpajak${doc.id}'><i class='fas fa-pen'></i> Edit</div>
                    <div class='hapus-req-faktur-pajak dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
                </div>
            </div>
        </div>
        <div id="keterangan-req-faktur-pajak-tampilan${doc.id}" class="keterangan-req-faktur-pajak-tampilan">${keterangan}</div>
        `        
        listReqFakturPajakPending.appendChild(div);
        document.querySelector('#jumlah-req-faktur-pajak-pending').innerHTML = Number(document.querySelector('#jumlah-req-faktur-pajak-pending').innerHTML) + 1;

        let edit = document.querySelector('#tambah-req-faktur-pajak' + doc.id);
        edit.addEventListener('submit', function(e){
            e.preventDefault();
            let tanggalUpdate = edit['tanggal-req-faktur-pajak' + doc.id].value;
            let keteranganUpdate = edit['keterangan-req-faktur-pajak' + doc.id].value;
            let hari = String(new Date().getDate()).padStart(2, '0');
            let bulan = String(new Date().getMonth() + 1).padStart(2, '0');
            let tahun = new Date().getFullYear();
            let tanggalSekarangUpdate = tahun + '-' + bulan + '-' + hari;
            if(tanggalUpdate > tanggalSekarangUpdate){
                alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
            } else if(tanggalUpdate == 0){
                tanggalUpdate = new Date().getTime();
                db.collection('reqFakturPajak').doc(doc.id).update({
                    tanggal : tanggalUpdate,
                    keterangan : keteranganUpdate.replace(/\n\r?/g, '<br/>')
                }).then(() => {
                    $('#modalreqfakturpajak' + doc.id).modal('hide');
                })
            } else {
                db.collection('reqFakturPajak').doc(doc.id).update({
                    tanggal : tanggalUpdate,
                    keterangan : keteranganUpdate.replace(/\n\r?/g, '<br/>')
                }).then(() => {
                    $('#modalreqfakturpajak' + doc.id).modal('hide');
                })            
            }
        })

        let copy = document.querySelector('#copy' + doc.id);
        copy.addEventListener('click', function(e){
            e.stopPropagation();
            let range = document.getSelection().getRangeAt(0);
            range.selectNode(document.querySelector("#keterangan-req-faktur-pajak-tampilan" + doc.id));
            window.getSelection().addRange(range);
            document.execCommand("copy");            
        })

        let selesai = document.querySelector('#selesai' + doc.id);
        selesai.addEventListener('click', function(e){
            e.stopPropagation();
            db.collection('reqFakturPajak').doc(doc.id).update({
                status : 'COMPLETED'
            }).then(() => {
                $('#modalreqfakturpajak' + doc.id).modal('hide');
            })
        })        

        break;
        case 'COMPLETED':
        div.innerHTML = `
        <div class="header-req-faktur-pajak">
            <div class="judul-req-faktur-pajak">Request Faktur Pajak, Tanggal <span id="tanggal-req-faktur-pajak-tampilan${doc.id}">${tanggal}</span></div>
            <div class="dropdown">        
                <i class="btn fa fa-ellipsis-v tombol-pengaturan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="tombol-pengaturan${doc.id}"></i>
                <div class="dropdown-menu menu-konfigurasi-req-faktur-pajak">
                    <div class='hapus-req-faktur-pajak dropdown-item' id="hapus${doc.id}"><i class='fas fa-trash-alt'></i> Hapus</div>
                </div>
            </div>
        </div>
        <div id="keterangan-req-faktur-pajak-tampilan${doc.id}" class="keterangan-req-faktur-pajak-tampilan">${keterangan}</div>
        `        
        listReqFakturPajakSelesai.appendChild(div);
        document.querySelector('#jumlah-req-faktur-pajak-selesai').innerHTML = Number(document.querySelector('#jumlah-req-faktur-pajak-selesai').innerHTML) + 1;
    }


    let hapus = document.querySelector('#hapus' + doc.id);
    hapus.addEventListener('click', function(e){
        e.stopPropagation();
        let konfirmasi = confirm('Apa anda yakin ingin menghapus data request faktur pajak ini?');
        if(konfirmasi == true){
            db.collection('reqFakturPajak').doc(doc.id).delete();
            $('#modalreqfakturpajak' + doc.id).modal('hide');
        }
    })


    $(document).ready(function() {
        db.collection('reqFakturPajak').onSnapshot(snapshot =>{
            let items = $('#list-req-faktur-pajak-pending > .req-faktur-pajak').get();
            items.sort(function(a, b) {
                let keyA = $(a).data('date');
                let keyB = $(b).data('date');
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            })
            let daftarReqFakturPajakPending = $('#list-req-faktur-pajak-pending');
            $.each(items, function(i, div) {
                daftarReqFakturPajakPending.append(div);
            })
        })
    })    

}

function renderUpdateReqFakturPajak(doc){
    let tanggal = doc.data().tanggal;
    let keterangan = doc.data().keterangan;
    let status = doc.data().status;
    document.querySelector('#reqfakturpajak' + doc.id).setAttribute('data-date', new Date(tanggal).getTime())
    let kalkulasiTanggal = new Date(tanggal);
    let dd = String(kalkulasiTanggal.getDate()).padStart(2, '0');
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let mm = bulan[kalkulasiTanggal.getMonth()]
    let yyyy = kalkulasiTanggal.getFullYear();
    tanggal = dd + ' ' + mm + ' ' + yyyy;
    mm = String(kalkulasiTanggal.getMonth() + 1).padStart(2, '0');
    let tampilanTanggal = yyyy + '-' + mm + '-' + dd;
    let tanggalRequest = yyyy + mm + dd;
    document.querySelector('#tanggal-req-faktur-pajak' + doc.id).value = tampilanTanggal;
    document.querySelector('#tanggal-req-faktur-pajak-tampilan' + doc.id).innerHTML = tanggal;
    document.querySelector('#keterangan-req-faktur-pajak' + doc.id).innerHTML = keterangan.replace(/<br\s*[\/]?>/gi, "\n");
    document.querySelector('#keterangan-req-faktur-pajak-tampilan' + doc.id).innerHTML = keterangan;

    switch(status){
        case 'PENDING':
        if(document.querySelector('#reqfakturpajak' + doc.id).parentElement != listReqFakturPajakPending){
            listReqFakturPajakPending.appendChild(document.querySelector('#reqfakturpajak' + doc.id))
        }
        break;
        case 'COMPLETED':
        if(document.querySelector('#reqfakturpajak' + doc.id).parentElement != listReqFakturPajakSelesai){
            [document.querySelector('#selesai' + doc.id), document.querySelector('#edit' + doc.id), document.querySelector('#copy' + doc.id)].forEach(item => {
                item.remove();
            })
            listReqFakturPajakSelesai.appendChild(document.querySelector('#reqfakturpajak' + doc.id))
            document.querySelector('#jumlah-req-faktur-pajak-pending').innerHTML = Number(document.querySelector('#jumlah-req-faktur-pajak-pending').innerHTML) - 1;
            document.querySelector('#jumlah-req-faktur-pajak-selesai').innerHTML = Number(document.querySelector('#jumlah-req-faktur-pajak-selesai').innerHTML) + 1;
        }        
    }

}

function auto_grow(element){
    element.style.height = (element.scrollHeight)+"px";
}





