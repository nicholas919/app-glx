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
                            if(rataRataPenyelesaian > 604800000){
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
                document.querySelector('#jumlah-data-swot-kosong').style.display = 'none';
                let jumlahStrength = document.querySelectorAll('.strength').length;
                let jumlahWeakness = document.querySelectorAll('.weakness').length;
                let jumlahOportunity = document.querySelectorAll('.oportunity').length;
                let jumlahThreat = document.querySelectorAll('.threat').length;
                document.querySelector('#jumlah-strength').innerHTML = jumlahStrength;
                document.querySelector('#jumlah-weakness').innerHTML = jumlahWeakness;
                document.querySelector('#jumlah-oportunity').innerHTML = jumlahOportunity;
                document.querySelector('#jumlah-threat').innerHTML = jumlahThreat;
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
                let jumlahStrength = document.querySelectorAll('.strength').length;
                let jumlahWeakness = document.querySelectorAll('.weakness').length;
                let jumlahOportunity = document.querySelectorAll('.oportunity').length;
                let jumlahThreat = document.querySelectorAll('.threat').length;
                document.querySelector('#jumlah-strength').innerHTML = jumlahStrength;
                document.querySelector('#jumlah-weakness').innerHTML = jumlahWeakness;
                document.querySelector('#jumlah-oportunity').innerHTML = jumlahOportunity;
                document.querySelector('#jumlah-threat').innerHTML = jumlahThreat;
                if(jumlahStrength == 0 && jumlahWeakness == 0 && jumlahOportunity == 0 && jumlahThreat == 0){
                    document.querySelector('#jumlah-data-swot').remove();
                    document.querySelector('#jumlah-data-swot-kosong').style.display = 'block';
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
                let jumlahStrength = document.querySelectorAll('.strength').length;
                let jumlahWeakness = document.querySelectorAll('.weakness').length;
                let jumlahOportunity = document.querySelectorAll('.oportunity').length;
                let jumlahThreat = document.querySelectorAll('.threat').length;
                document.querySelector('#jumlah-strength').innerHTML = jumlahStrength;
                document.querySelector('#jumlah-weakness').innerHTML = jumlahWeakness;
                document.querySelector('#jumlah-oportunity').innerHTML = jumlahOportunity;
                document.querySelector('#jumlah-threat').innerHTML = jumlahThreat;
            }
        })
    }, err => console.log(err.message))

        db.collection('achievement').onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                renderAchievement(change.doc);
                document.querySelector('#jumlah-data-achievement-kosong').style.display = 'none';
                let jumlahAchievement = document.querySelectorAll('.pencapaian').length;
                document.querySelector('#jumlah-achievement').innerHTML = jumlahAchievement;
                setupUI(user);
            }else if (change.type == 'removed'){
                let tr = document.querySelector('[data-id="' + change.doc.id + '"]');
                listPencapaian.removeChild(tr);
                let jumlahAchievement = document.querySelectorAll('.pencapaian').length;
                document.querySelector('#jumlah-achievement').innerHTML = jumlahAchievement;
                if(jumlahAchievement == 0){
                    document.querySelector('#jumlah-data-achievement').remove();
                    document.querySelector('#jumlah-data-achievement-kosong').style.display = 'block';
                }                
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
        
        db.collection('pengumuman').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderPengumuman(change.doc);
                        setupUI(user);
                    }else if (change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        document.querySelector('#grid-jumbotron-pengumuman').parentNode.removeChild(div);
                    } else if(change.type == 'modified'){
                        renderUpdatePengumuman(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('overview').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderOverview(change.doc);
                        setupUI(user);
                    }
                })
    }, err => console.log(err.message))

        db.collection('kategoriMenu').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderKategoriMenu(change.doc);
                        setupUI(user);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        listKategoriMenu.removeChild(div);
                    } else if(change.type == 'modified'){
                        renderUpdateKategoriMenu(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('menu').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderMenu(change.doc);
                        setupUI(user);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        let listMenu = document.querySelectorAll('.list-menu');
                        for(let x = 0; x<listMenu.length; x++){
                            let li = listMenu[x].getElementsByTagName('li');
                            for(let y = 0; y<li.length; y++){
                                let id = li[y].getAttribute('data-id')
                                if(id == change.doc.id){
                                    listMenu[x].removeChild(div);
                                }
                            }
                        }
                    } else if(change.type == 'modified'){
                        renderUpdateMenu(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('ekspedisiCetakLabel').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderEkspedisiCetakLabel(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        let opsi = document.querySelector('#ekspedisicetaklabel' + change.doc.id)
                        listEkspedisiCetakLabel.removeChild(div);                        
                        opsi.remove();
                        document.querySelector('#ekspedisitransaksiberjalan' + change.doc.id).remove();
                        setInterval(function(){
                        document.querySelectorAll('.ekspedisi-transaksi-berjalan' + change.doc.id).forEach(eks => {
                        eks.remove();
                        })
                    },10)                        
                    } else if(change.type == 'modified'){
                        renderUpdateEkspedisiCetakLabel(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('catatan').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderCatatan(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        listCatatan.removeChild(div);
                    } else if(change.type == 'modified'){
                        renderUpdateCatatan(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('indent').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderIndent(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        listIndentCust.removeChild(div);
                    } else if(change.type == 'modified'){
                        renderUpdateIndent(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('perpindahan').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderPerpindahan(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdatePerpindahan(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('perpindahanSelesai').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderPerpindahanSelesai(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    }
                })
    }, err => console.log(err.message))            

        db.collection('tenorKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderTenorKalkulator(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdateTenorKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('biayaAdminKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderBiayaAdminKalkulator(change.doc);
                    } else if(change.type == 'modified'){
                        renderUpdateBiayaAdminKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))        

        db.collection('biayaBungaKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderBiayaBungaKalkulator(change.doc);
                    } else if(change.type == 'modified'){
                        renderUpdateBiayaBungaKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('aktivasiBiayaAdminKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderAktivasiBiayaAdminKalkulator(change.doc);
                    } else if(change.type == 'modified'){
                        renderUpdateAktivasiBiayaAdminKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('aktivasiBiayaBungaKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderAktivasiBiayaBungaKalkulator(change.doc);
                    } else if(change.type == 'modified'){
                        renderUpdateAktivasiBiayaBungaKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('transaksiBerjalan').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderTransaksiBerjalan(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdateTransaksiBerjalan(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('returPending').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderReturPending(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdateReturPending(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('returSelesai').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        renderReturSelesai(change.doc);
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdateReturSelesai(change.doc);
                    }
                })
    }, err => console.log(err.message))                 

        $(document).ready(function(){
            setInterval(function(){ refreshOnPengumuman(); }, 60000);
            setInterval(function(){ refreshOnOverview(); }, 10);
            setInterval(function(){ refreshOnCatatan(); }, 60000);
            setInterval(function(){ refreshOnPerpindahan(); }, 1000);
            setInterval(function(){ refreshOnPerpindahanKedua(); }, 10);
            setInterval(function(){ refreshOnJumlahTenor(); }, 10);
            setInterval(function(){ refreshOnOpsiEkspedisi(); }, 10);
            setInterval(function(){ refreshOnRetur(); }, 10)
        });


        function refreshOnPengumuman(){
          db.collection('pengumuman').get().then(function(querySnapshot){
            querySnapshot.docs.map((doc) => {
              let tanggal = doc.data().tanggal;
              let tanggalSekarang = new Date().getTime();
              let perbandinganWaktu = tanggalSekarang - tanggal;
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
            })
          }, err => console.log(err.message))
        }

        function refreshOnOverview(){
          db.collection('overview').get().then(function(querySnapshot){
            querySnapshot.docs.map((doc) => {
              let waktuOverview = doc.data().waktuOverview;
              let waktuSekarang = new Date().getTime();
              let perbandinganWaktu = waktuSekarang - waktuOverview;
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
                $('#waktu-overview' + doc.id).text(perbandinganWaktu);
            })
          }, err => console.log(err.message))
        }

        function refreshOnCatatan(){
        db.collection('catatan').get().then(function(querySnapshot){
            querySnapshot.docs.map((doc) => {
                let tanggal = doc.data().tanggal;
                let tanggalSekarang = new Date().getTime();
                let perbandinganWaktu = tanggalSekarang - tanggal;
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
            })
          }, err => console.log(err.message))
        }

        function refreshOnPerpindahan(e){
                let count = 0;            
        db.collection('perpindahan').get().then(function(querySnapshot){
            querySnapshot.docs.map((doc) => {
                let div = document.querySelector('[data-id="' + doc.id + '"]');                
                let tanggal = doc.data().tanggal;
                div.setAttribute('data-date', new Date(tanggal).getTime())
                let tanggalSekarang = new Date();
                let dd = String(new Date(tanggal).getDate()).padStart(2, '0');
                let mm1 = String(new Date(tanggal).getMonth() + 1).padStart(2, '0');
                let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
                let mm = bulan[new Date(tanggal).getMonth()]                
                let yyyy = new Date(tanggal).getFullYear();
                tanggal = yyyy + mm1 + dd;
                let tampilanTanggal = dd + ' ' + mm + ' ' + yyyy;
                dd = String(tanggalSekarang.getDate()).padStart(2, '0');
                mm1 = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
                yyyy = tanggalSekarang.getFullYear();
                tanggalSekarang = yyyy + mm1 + dd;
                if(tanggal == tanggalSekarang){
                    document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Hari Ini';
                    listPerpindahanBarang.appendChild(div);
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
                } else {
                    document.querySelector('#tanggal-perpindahan-barang-tampilan' + doc.id).innerHTML = 'Tanggal ' + tampilanTanggal;
                        listPerpindahanBarangPending.appendChild(div);
                            let items = $('#list-perpindahan-barang-pending > .perpindahan-barang').get();
                            items.sort(function(a, b) {
                            let keyA = $(a).data('date');
                            let keyB = $(b).data('date');
                            if (keyA < keyB) return 1;
                            if (keyA > keyB) return -1;
                            return 0;
                                })
                            let daftarPerpindahanBarangPending = $('#list-perpindahan-barang-pending');
                            $.each(items, function(i, div) {
                            daftarPerpindahanBarangPending.append(div);
                                })                        
                }
                if(!document.querySelector('#peringatan-perpindahan') && !document.querySelector('#peringatan-perpindahan-kedua')){
                    if(tanggal == tanggalSekarang){
                        let counter = 1;                        
                        count += counter;
                    }
                    if(count != 0){
                    let peringatan = document.createElement('div');
                    let peringatanKedua = document.createElement('div');
                    peringatan.setAttribute('id', 'peringatan-perpindahan');
                    peringatanKedua.setAttribute('id', 'peringatan-perpindahan-kedua');
                    peringatan.innerHTML = `
                    <i class="fa fa-info-circle ikon-notice"></i> <span style="font-weight:bold;">NOTICE</span> : Terdapat <span id="jumlah-perpindahan-hari-ini">${count}</span> perpindahan yang telah terjadwalkan pada hari ini!
                    `
                    peringatanKedua.innerHTML = `
                    <div>
                    <div><i class="fa fa-warning"></i> <span style="font-weight:bold;">Announcement</span></div>
                    Terdapat <span id="jumlah-perpindahan-hari-ini-kedua">${count}</span> perpindahan yang telah terjadwalkan pada hari ini! <a id="link-lihat-perpindahan" class="tab-halaman" data-toggle="pill" href="#halaman-perpindahan-barang" role="tab" aria-controls="halaman-perpindahan-barang" aria-selected="true">Lihat Sekarang <i id="ikon-link-lihat-perpindahan" class='fas fa-paper-plane'></i></a>
                    </div>
                    <div id="hapus-peringatan-perpindahan-kedua"></div>
                    `
                    document.querySelector('#tombol-tambah-lihat-perpindahan-kedua').parentNode.insertBefore(peringatan, document.querySelector('#tombol-tambah-lihat-perpindahan-kedua').nextSibling);
                    document.querySelector('#jumbotron-performa-peserta').parentNode.insertBefore(peringatanKedua, document.querySelector('#jumbotron-performa-peserta'));
                    setInterval(function(){
                        if(document.querySelector('#peringatan-perpindahan-kedua')){
                            if($(window).width() >= 650){
                            document.querySelector('#jumbotron-performa-peserta').style.setProperty('margin-top', '82px', 'important')
                            document.querySelector('#jumbotron-performa-peserta-individu').style.setProperty('margin-top', '90px', 'important')
                            } else if($(window).width() <= 650){
                            document.querySelector('#jumbotron-performa-peserta').style.setProperty('margin-top', '107px', 'important')                    
                            document.querySelector('#jumbotron-performa-peserta-individu').style.setProperty('margin-top', '112px', 'important')
                            }
                        }
                        },10)                    
                    }
                } else if(document.querySelector('#peringatan-perpindahan') && document.querySelector('#peringatan-perpindahan-kedua')){
                    if(tanggal == tanggalSekarang){
                        let counter = 1;                        
                        count += counter;
                    }
                    if(count == 0){
                        document.querySelector('#peringatan-perpindahan').remove();
                        document.querySelector('#peringatan-perpindahan-kedua').remove();                    
                    } else {
                        document.querySelector('#jumlah-perpindahan-hari-ini').innerHTML = count;
                        document.querySelector('#jumlah-perpindahan-hari-ini-kedua').innerHTML = count;
                    }
                }               
            })
          }, err => console.log(err.message))
        }

        function refreshOnPerpindahanKedua(e){
            document.querySelector('#jumlah-perpindahan-pending').innerHTML = document.querySelector('#list-perpindahan-barang-pending').childNodes.length;
            document.querySelector('#jumlah-perpindahan-selesai').innerHTML = document.querySelector('#list-perpindahan-barang-selesai').childNodes.length;
            if(!document.querySelector('#peringatan-perpindahan-kedua')){
                document.querySelector('#jumbotron-performa-peserta').style.setProperty('margin-top', '10px', 'important')
                document.querySelector('#jumbotron-performa-peserta-individu').style.setProperty('margin-top', '10px', 'important')
            }
        }
        function refreshOnJumlahTenor(e){
            let tombolTenor = document.querySelectorAll('.tombol-tenor-kalkulator')
            if(document.querySelectorAll('.tombol-tenor-kalkulator').length > 3){
                document.querySelector('#label-setting-kalkulator-tenor').style.paddingTop = '5px';
                document.querySelector('#label-setting-kalkulator-tenor').style.alignItems = 'normal';
                for(let x = 0; x<tombolTenor.length; x++){
                    tombolTenor[x].style.marginBottom = '5px'
                }
            } else {                
                document.querySelector('#label-setting-kalkulator-tenor').style.paddingTop = '0px';
                document.querySelector('#label-setting-kalkulator-tenor').style.alignItems = 'center';                
                for(let x = 0; x<tombolTenor.length; x++){
                    tombolTenor[x].style.marginBottom = '0px'
                }                
            }
        }

        function refreshOnOpsiEkspedisi(e){
            let daftarOpsiEkspedisi = document.querySelectorAll('.ekspedisi-transaksi-berjalan');
            for(let x = 0; x<daftarOpsiEkspedisi.length; x++){
            db.collection('ekspedisiCetakLabel').get().then(function(querySnapshot){
            querySnapshot.docs.map((doc) => {
            db.collection('transaksiBerjalan').get().then(function(secondQuerySnapshot){
            let ekspedisiTransaksiBerjalan = document.querySelectorAll('.ekspedisi-transaksi-berjalan' + doc.id);
            if(ekspedisiTransaksiBerjalan.length != secondQuerySnapshot.docs.length){
            if(!(daftarOpsiEkspedisi[x].length > querySnapshot.docs.length)){                
                let opsi = document.createElement('option');
                opsi.classList.add('ekspedisi-transaksi-berjalan' + doc.id);
                let tanggal = doc.data().tanggal;
                opsi.setAttribute('data-date', tanggal)
                let namaEkspedisiCetakLabel = doc.data().namaEkspedisiCetakLabel;
                opsi.innerHTML = namaEkspedisiCetakLabel;
                daftarOpsiEkspedisi[x].options[0].parentNode.insertBefore(opsi, daftarOpsiEkspedisi[x].options[0].nextSibling);
                    secondQuerySnapshot.docs.map((secondDoc) => {
                        $(document).ready(function() {
                        db.collection('transaksiBerjalan').onSnapshot(snapshot =>{
                        let items = $('#ekspedisi-transaksi-berjalan' + secondDoc.id + ' > option').get();
                        items.sort(function(a, b) {
                        let keyA = $(a).data('date');
                        let keyB = $(b).data('date');
                        if (keyA > keyB) return 1;
                        if (keyA < keyB) return -1;
                        return 0;
                        })
                        let daftarOpsiEkspedisiCetakLabel = $('#ekspedisi-transaksi-berjalan' + secondDoc.id);
                        $.each(items, function(i, div) {
                        daftarOpsiEkspedisiCetakLabel.append(div)
                        })
                      })
                    })
                    let pilihanEkspedisi = document.querySelector('#ekspedisi-transaksi-berjalan' + secondDoc.id);
                    let opsiEkspedisi;
                    for(let x = 0; x<pilihanEkspedisi.options.length; x++){
                        opsiEkspedisi = pilihanEkspedisi.options[x];
                        if(opsiEkspedisi.value == secondDoc.data().ekspedisiTransaksi){
                            opsiEkspedisi.setAttribute('selected', 'selected');
                            }
                        }                                        
                })
                }                                                        
            }
            for(let z = 0; z<ekspedisiTransaksiBerjalan.length; z++){
                ekspedisiTransaksiBerjalan[z].innerHTML = doc.data().namaEkspedisiCetakLabel;
                }            
                    }, err => console.log(err.message))
                })
            }, err => console.log(err.message))
            }
        }

        function refreshOnRetur(e){
            document.querySelector('#jumlah-retur-pending').innerHTML = document.querySelector('#list-retur-pending').childNodes.length;
            document.querySelector('#jumlah-retur-selesai').innerHTML = document.querySelector('#list-retur-selesai').childNodes.length;
        }

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
        alert('Pastikan email domain karyawan adalah @galaxy.id');
        document.querySelector('#email-peserta').value = '';
    } else if(daftarKaryawan.includes(nama.toLowerCase().replace(" ", "-")) && daftarEmailKaryawan.includes(email)){
        alert('Nama dan alamat email ini telah digunakan!')
        document.querySelector('#nama-peserta').value = '';
        document.querySelector('#email-peserta').value = '';
    } else if(daftarKaryawan.includes(nama.toLowerCase().replace(" ", "-")) && !daftarEmailKaryawan.includes(email)){
        alert('Nama ini telah digunakan!')
        document.querySelector('#nama-peserta').value = '';
    } else if(daftarEmailKaryawan.includes(email) && !daftarKaryawan.includes(nama.toLowerCase().replace(" ", "-"))){
        alert('Alamat email ini telah digunakan!')
        document.querySelector('#email-peserta').value = '';
    }  else {
    db.collection('peserta').add({
        nama : daftarPeserta['nama-peserta'].value,
        libur : daftarPeserta['hari-libur'].value,
        lokasi : daftarPeserta['lokasi-berjaga'].value,
        email : daftarPeserta['email-peserta'].value
    }).then(() => {
        tanggal = new Date().getTime();
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                pengguna : nama,
                waktuOverview : tanggal,
                overview : 'add-user'
            })
        }).then(() => {
        $('#modaldaftarpeserta').modal('hide');
        document.querySelector('#tambah-peserta').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;
        })
    })
   }
})


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
        tanggal = new Date().getTime();
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                penggunaTugas : daftarTugas['target-peserta'].value,
                waktuOverview : tanggal,
                overview : 'add-task'
            })
        }).then(() => {
        $('#modaltambahtugas').modal('hide');
        document.querySelector('#tambah-tugas').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;          
        })
    })
  }
})

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
        let tanggal = new Date().getTime();
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                penggunaKesalahan : daftarKesalahan['target-peserta-kedua'].value,
                waktuOverview : tanggal,
                overview : 'add-mistake'
            })        
        }).then(() => {
        $('#modaltambahkesalahan').modal('hide');
        document.querySelector('#tambah-kesalahan').reset();  
        })        
    })
  } else {
    db.collection('kesalahan').add({
        tanggal: daftarKesalahan['tanggal-kesalahan'].value,
        nama: daftarKesalahan['target-peserta-kedua'].value,
        kontenKesalahan: daftarKesalahan['konten-kesalahan'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        let tanggal = new Date().getTime();
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                penggunaKesalahan : daftarKesalahan['target-peserta-kedua'].value,
                waktuOverview : tanggal,
                overview : 'add-mistake'
            })        
        }).then(() => {
            $('#modaltambahkesalahan').modal('hide');
            document.querySelector('#tambah-kesalahan').reset();  
        })
    })
  }
})

const daftarSwot = document.querySelector('#tambah-swot');
daftarSwot.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('swot').add({
        analisis : daftarSwot['analisis-swot'].value,
        kontenAnalisis : daftarSwot['konten-analisis'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        let tanggal = new Date().getTime();
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                analisisSwot : daftarSwot['analisis-swot'].value.toLowerCase(),
                overview : 'add-swot'
            })
    }).then(() =>{
        $('#modalswot').modal('hide');
        document.querySelector('#tambah-swot').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;
        })
    })
})

const daftarAchievement = document.querySelector('#tambah-achievement');
daftarAchievement.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggalSekarang = new Date();
    let hari = String(tanggalSekarang.getDate()).padStart(2, '0');
    let bulan = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
    let tahun = tanggalSekarang.getFullYear();
    tanggalSekarang = tahun + '-' + bulan + '-' + hari;
    let tanggal = new Date().getTime();
    if(document.querySelector('#tanggal-pencapaian').value > tanggalSekarang){
      alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
    } else if(document.querySelector('#tanggal-pencapaian').value == 0){
    db.collection('achievement').add({
        tanggal: tanggal,
        kontenPencapaian: daftarAchievement['konten-pencapaian'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                overview : 'add-achievement'
            })
        }).then(() => {
        $('#modalachievement').modal('hide');
        document.querySelector('#tambah-achievement').reset();
        })
    })
  } else {
    db.collection('achievement').add({
        tanggal: daftarAchievement['tanggal-pencapaian'].value,
        kontenPencapaian: daftarAchievement['konten-pencapaian'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                overview : 'add-achievement'
            })
        }).then(() => {        
        $('#modalachievement').modal('hide');
        document.querySelector('#tambah-achievement').reset();
        })
    })
  }
})

const daftarPengumuman = document.querySelector('#tambah-pengumuman');
daftarPengumuman.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(doc =>{
    let tanggal = new Date().getTime();
    let username = doc.data().username;
    db.collection('pengumuman').add({
        tanggal: tanggal,
        pembuatPengumuman: username,
        judulPengumuman: daftarPengumuman['judul-pengumuman'].value,
        kontenPengumuman: daftarPengumuman['konten-pengumuman'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
            db.collection('overview').add({
                penggunaOverview : username,
                waktuOverview : tanggal,
                judulPengumuman : daftarPengumuman['judul-pengumuman'].value,
                overview : 'add-announcement'
            })
        }, err => {
            if(err.name == 'FirebaseError'){
                alert('Anda tidak diperizinkan untuk membuat pengumuman')
            }
    }).then(() => {
        $('#modalpengumuman').modal('hide');
        document.querySelector('#tambah-pengumuman').reset();
        })
    })
})

const daftarKategoriMenu = document.querySelector('#tambah-kategori-menu');
daftarKategoriMenu.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggal = new Date().getTime();
    db.collection('kategoriMenu').add({
        tanggal: tanggal,
        namaKategoriMenu: daftarKategoriMenu['nama-kategori-menu'].value
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                namaKategoriMenu : daftarKategoriMenu['nama-kategori-menu'].value,
                overview : 'add-menu-category'
            })
        }).then(() => {
        $('#modalkategorimenu').modal('hide');
        document.querySelector('#tambah-kategori-menu').reset();
        })
    })
})

const daftarEkspedisiCetakLabel = document.querySelector('#tambah-ekspedisi-cetak-label');
daftarEkspedisiCetakLabel.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggal = new Date().getTime();
    db.collection('ekspedisiCetakLabel').add({
        tanggal: tanggal,
        namaEkspedisiCetakLabel: daftarEkspedisiCetakLabel['nama-ekspedisi-cetak-label'].value
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                namaEkspedisiCetakLabel : daftarEkspedisiCetakLabel['nama-ekspedisi-cetak-label'].value,
                overview : 'add-print-label-expedition',
            })
        }).then(() => {
        $('#modalekspedisicetaklabel').modal('hide');
        document.querySelector('#tambah-ekspedisi-cetak-label').reset();
        })
    })
})

const daftarCatatan = document.querySelector('#tambah-catatan');
daftarCatatan.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggal = new Date().getTime();
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
    db.collection('catatan').add({
        tanggal: tanggal,
        kontenCatatan: daftarCatatan['konten-catatan'].value.replace(/\n\r?/g, '<br/>'),
        pembuatCatatan: doc.data().username
    }).then(() => {
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                overview : 'add-note'
            })
        }).then(() => {
        $('#modalcatatan').modal('hide');
        document.querySelector('#tambah-catatan').reset();
        })
    })
})

const daftarIndentCust = document.querySelector('#tambah-indent-cust');
daftarIndentCust.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggal = new Date().getTime();
    db.collection('indent').add({
        tanggal: tanggal,
        namaCustomer: daftarIndentCust['nama-customer-indent-cust'].value,
        kontakCustomer: daftarIndentCust['kontak-customer-indent-cust'].value,
        kontenIndent: daftarIndentCust['konten-indent-cust'].value.replace(/\n\r?/g, '<br/>'),
        produkIndent: daftarIndentCust['produk-indent-cust'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                namaCustomer : daftarIndentCust['nama-customer-indent-cust'].value,
                overview : 'add-indent'
            })
        }).then(() => {
        $('#modalindentcust').modal('hide');
        document.querySelector('#tambah-indent-cust').reset();
        })
    })
})

const daftarPerpindahanBarang = document.querySelector('#tambah-perpindahan-barang');
daftarPerpindahanBarang.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggalSekarang = new Date();
    let hari = String(tanggalSekarang.getDate()).padStart(2, '0');
    let bulan = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
    let tahun = tanggalSekarang.getFullYear();
    tanggalSekarang = tahun + '-' + bulan + '-' + hari;    
    let tanggal = new Date().getTime();
    if(daftarPerpindahanBarang['tanggal-perpindahan-barang'].value == 0){
    db.collection('perpindahan').add({
        tanggal: tanggal,
        kontenPerpindahan: daftarPerpindahanBarang['konten-perpindahan-barang'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                tanggalPerpindahan : tanggal,
                overview : 'add-transport'
            })
        }).then(() => {
        $('#modalperpindahanbarang').modal('hide');
        document.querySelector('#tambah-perpindahan-barang').reset();
        })
    })
    } else {
    if(daftarPerpindahanBarang['tanggal-perpindahan-barang'].value < tanggalSekarang){
        alert('Cantumkan tanggal perpindahan barang dengan benar!')   
    } else {
    db.collection('perpindahan').add({
        tanggal: daftarPerpindahanBarang['tanggal-perpindahan-barang'].value,
        kontenPerpindahan: daftarPerpindahanBarang['konten-perpindahan-barang'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : tanggal,
                tanggalPerpindahan : daftarPerpindahanBarang['tanggal-perpindahan-barang'].value,
                overview : 'add-transport'
            })
        }).then(() => {
        $('#modalperpindahanbarang').modal('hide');
        document.querySelector('#tambah-perpindahan-barang').reset();
        })
    })
    }
}
})

const daftarTenorKalkulator = document.querySelector('#tambah-tenor-kalkulator');
daftarTenorKalkulator.addEventListener('submit', (e) => {
    e.preventDefault();
    let available = [];
    db.collection('tenorKalkulator').get().then(function(querySnapshot){
        if(querySnapshot.docs.length == 0){
            fcTenorKalkulator();
        } else {
        querySnapshot.docs.map((doc) => {
            if(doc.data().tenor == daftarTenorKalkulator['tenor-kalkulator'].value){
                available.push('yes');
                alert('Tenor berikut sudah dipergunakan');
                if(querySnapshot.docs.length == available.length){
                    if(!available.includes('yes')){
                        fcTenorKalkulator();
                    }
                }
            } else {
                available.push('no');
                if(querySnapshot.docs.length == available.length){
                    if(!available.includes('yes')){
                        fcTenorKalkulator();
                    }
                }                
            }
        })
        }
    })
})

function fcTenorKalkulator(){
    if(daftarTenorKalkulator['bunga-tenor-kalkulator'].value.match(/[a-z]/g) != null || daftarTenorKalkulator['bunga-tenor-kalkulator'].value.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/) != null && daftarTenorKalkulator['biaya-admin-tenor-kalkulator'].value.charAt(0) == '0' && daftarTenorKalkulator['biaya-admin-tenor-kalkulator'].value.length > 1){
        alert('Kolom yang anda isi pada biaya admin dan bunga tidak valid.');
    }else if(daftarTenorKalkulator['bunga-tenor-kalkulator'].value.match(/[a-z]/g) != null || daftarTenorKalkulator['bunga-tenor-kalkulator'].value.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/) != null){
        alert('Pastikan untuk tidak menggunakan huruf atau karakter spesial pada kolom biaya bunga, karakter spesial yang hanya diperbolehkan adalah tanda titik.')
    } else if(daftarTenorKalkulator['biaya-admin-tenor-kalkulator'].value.charAt(0) == '0' && daftarTenorKalkulator['biaya-admin-tenor-kalkulator'].value.length > 1){
        alert('Kolom yang anda isi pada biaya admin tidak valid.');
    } else {
    db.collection('tenorKalkulator').add({
        tenor: daftarTenorKalkulator['tenor-kalkulator'].value,
        biayaAdmin: daftarTenorKalkulator['biaya-admin-tenor-kalkulator'].value,
        bunga: daftarTenorKalkulator['bunga-tenor-kalkulator'].value
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : new Date().getTime(),
                tenor : daftarTenorKalkulator['tenor-kalkulator'].value,
                overview : 'add-tenor-calculator'
            })
        }).then(() => {
        $('#modaltenorkalkulator').modal('hide');
        document.querySelector('#tambah-tenor-kalkulator').reset();
        })
    })
    }
}


const daftarTransaksiBerjalan = document.querySelector('#tambah-transaksi-berjalan');
daftarTransaksiBerjalan.addEventListener('submit', function(e){
    e.preventDefault();
    let tanggalSekarang = new Date();
    let hari = String(tanggalSekarang.getDate()).padStart(2, '0');
    let bulan = String(tanggalSekarang.getMonth() + 1).padStart(2, '0');
    let tahun = tanggalSekarang.getFullYear();
    tanggalSekarang = tahun + '-' + bulan + '-' + hari;    
    let tanggal = new Date().getTime();    
    if(daftarTransaksiBerjalan['tanggal-transaksi-berjalan'].value > tanggalSekarang){
        alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
    } else if(daftarTransaksiBerjalan['tanggal-transaksi-berjalan'].value == 0){
    db.collection('transaksiBerjalan').add({
        tanggalTransaksi: tanggal,
        namaCustomer: daftarTransaksiBerjalan['customer-transaksi-berjalan'].value,
        kontakCustomer: daftarTransaksiBerjalan['kontak-transaksi-berjalan'].value,
        nominalTransaksi: daftarTransaksiBerjalan['nominal-transaksi-berjalan'].value,
        ekspedisiTransaksi: daftarTransaksiBerjalan['ekspedisi-transaksi-berjalan'].value,
        alamatCustomer: daftarTransaksiBerjalan['alamat-transaksi-berjalan'].value.replace(/\n\r?/g, '<br/>'),
        produkTransaksi: daftarTransaksiBerjalan['produk-transaksi-berjalan'].value.replace(/\n\r?/g, '<br/>'),
        keteranganTransaksi: daftarTransaksiBerjalan['keterangan-transaksi-berjalan'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : new Date().getTime(),
                namaCustomer : daftarTransaksiBerjalan['customer-transaksi-berjalan'].value,
                overview : 'add-transaction'
            })
        }).then(() => {
        $('#modaltransaksiberjalan').modal('hide');
        document.querySelector('#tambah-transaksi-berjalan').reset();
        })
    })
    } else {
    db.collection('transaksiBerjalan').add({
        tanggalTransaksi: daftarTransaksiBerjalan['tanggal-transaksi-berjalan'].value,
        namaCustomer: daftarTransaksiBerjalan['customer-transaksi-berjalan'].value,
        kontakCustomer: daftarTransaksiBerjalan['kontak-transaksi-berjalan'].value,
        nominalTransaksi: daftarTransaksiBerjalan['nominal-transaksi-berjalan'].value,
        ekspedisiTransaksi: daftarTransaksiBerjalan['ekspedisi-transaksi-berjalan'].value,
        alamatCustomer: daftarTransaksiBerjalan['alamat-transaksi-berjalan'].value.replace(/\n\r?/g, '<br/>'),
        produkTransaksi: daftarTransaksiBerjalan['produk-transaksi-berjalan'].value.replace(/\n\r?/g, '<br/>'),
        keteranganTransaksi: daftarTransaksiBerjalan['keterangan-transaksi-berjalan'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : new Date().getTime(),
                namaCustomer : daftarTransaksiBerjalan['customer-transaksi-berjalan'].value,
                overview : 'add-transaction'
            })
        }).then(() => {
        $('#modaltenorkalkulator').modal('hide');
        document.querySelector('#tambah-transaksi-berjalan').reset();
        })
    })        
    }
})

const daftarRetur = document.querySelector('#tambah-retur');
daftarRetur.addEventListener('submit', function(e){
    e.preventDefault();
if(daftarRetur['status-retur'].value == 'Belum Selesai'){
    db.collection('returPending').add({
        tanggal: new Date().getTime(),
        namaCustomer: daftarRetur['customer-retur'].value,
        kontakCustomer: daftarRetur['kontak-retur'].value,
        produkRetur: daftarRetur['produk-retur'].value.replace(/\n\r?/g, '<br/>'),
        keluhanCustomer: daftarRetur['keluhan-retur'].value.replace(/\n\r?/g, '<br/>'),
        keteranganRetur: daftarRetur['keterangan-retur'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : new Date().getTime(),
                namaCustomer : daftarRetur['customer-retur'].value,
                overview : 'add-return'
            })
        }).then(() => {
        $('#modalretur').modal('hide');
        document.querySelector('#tambah-retur').reset();
        })
    })
    } else {
    db.collection('returSelesai').add({
        tanggal: new Date().getTime(),
        namaCustomer: daftarRetur['customer-retur'].value,
        kontakCustomer: daftarRetur['kontak-retur'].value,
        produkRetur: daftarRetur['produk-retur'].value.replace(/\n\r?/g, '<br/>'),
        keluhanCustomer: daftarRetur['keluhan-retur'].value.replace(/\n\r?/g, '<br/>'),
        keteranganRetur: daftarRetur['keterangan-retur'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
            db.collection('overview').add({
                penggunaOverview : doc.data().username,
                waktuOverview : new Date().getTime(),
                namaCustomer : daftarRetur['customer-retur'].value,
                overview : 'add-return'
            })
        }).then(() => {
        $('#modalretur').modal('hide');
        document.querySelector('#tambah-retur').reset();
        })        
    })
    }
})



const formDaftar = document.querySelector('#form-daftar');
formDaftar.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const email = formDaftar['emaildaftar'].value;
  const password = formDaftar['passworddaftar'].value;

if(email.includes('galaxy.id')){

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('pengguna').doc(cred.user.uid).set({
      username : formDaftar['username'].value
    });
}, err => 
    console.log(err.code)

  ).then(() => {
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
    let tanggal = new Date().getTime();
    db.collection('overview').add({
        penggunaOverview : doc.data().username,
        waktuOverview : tanggal,
        overview : 'sign-up'
        })
    })
      $('#modaldaftar').modal('hide');
      formDaftar.reset();
        });
    } else {
       alert('Data Tidak Valid');
       formDaftar.reset();
    }
});

const keluar = document.querySelector('#sign-out');
keluar.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
    let konfirmasi = confirm("Apa anda yakin ingin keluar?");
    if(konfirmasi){
    let tanggal = new Date().getTime();
    db.collection('overview').add({
        penggunaOverview : doc.data().username,
        waktuOverview : tanggal,
        overview : 'sign-out'
        }).then(() => {
    auth.signOut();
    setTimeout(function(){
    window.location.reload();
    },2000)
        })
        }
    }, err => console.log(err.message));
});


const formMasuk = document.querySelector('#form-masuk');
formMasuk.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = formMasuk['emailmasuk'].value;
  const password = formMasuk['passwordmasuk'].value;

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
    let tanggal = new Date().getTime();
    db.collection('overview').add({
        penggunaOverview : doc.data().username,
        waktuOverview : tanggal,
        overview : 'sign-in'
        })
    })
      $('#modallogin').modal('hide');
      formMasuk.reset();
  }, err => {
    if(err.code == 'auth/user-not-found'){
        alert('User tidak ditemukan.')
    }else if(err.code == 'auth/wrong-password'){
        alert('Email atau Password yang anda masukkan salah!')
    } 
  });

});

