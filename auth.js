auth.onAuthStateChanged(user => {
  if(user){
    user.getIdTokenResult().then(idTokenResult => {
        user.adminKantor = idTokenResult.claims.adminKantor;
        user.member = idTokenResult.claims.member;
        setupUI(user);
        renderKalender();
    })
    db.collection('peserta').onSnapshot(snapshot =>{
    let changes = snapshot.docChanges();
    changes.forEach(change =>{
        if(change.type == 'added'){
            if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
            renderPeserta(change.doc);
            setupUI(user);
            }
        } else if (change.type == 'removed'){
            renderHapusPeserta(change.doc)
            let tr = document.querySelector('[data-id="' + change.doc.id + '"]');
            listPeserta.removeChild(tr);
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
        }
    })
        }, err => console.log(err.message))

    db.collection('tugas').onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                renderTugas(change.doc);
                setupUI(user);
                }
            }else if (change.type == 'removed'){
                let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                if(div.parentElement == tugasPeserta){
                    tugasPeserta.removeChild(div);
                } else if(div.parentElement == tugasPesertaSelesai){
                    tugasPesertaSelesai.removeChild(div);
                }
            } else if(change.type == 'modified'){
                renderUpdateTugas(change.doc);
            }
        })
    }, err => console.log(err.message))

        db.collection('kesalahan').onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                renderKesalahan(change.doc);
                setupUI(user);
                }
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
                if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
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
                }
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
                if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                renderAchievement(change.doc);
                document.querySelector('#jumlah-data-achievement-kosong').style.display = 'none';
                let jumlahAchievement = document.querySelectorAll('.pencapaian').length;
                document.querySelector('#jumlah-achievement').innerHTML = jumlahAchievement;
                setupUI(user);
                }
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderPengumuman(change.doc);
                        setupUI(user);
                        }
                    }else if (change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        document.querySelector('#grid-jumbotron-pengumuman').parentNode.removeChild(div);
                    } else if(change.type == 'modified'){
                        renderUpdatePengumuman(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('kategoriMenu').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderKategoriMenu(change.doc);
                        setupUI(user);
                        }
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderMenu(change.doc);
                        setupUI(user);
                        }
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderEkspedisiCetakLabel(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        let opsi = document.querySelector('#ekspedisicetaklabel' + change.doc.id)
                        listEkspedisiCetakLabel.removeChild(div);                        
                        opsi.remove();
                        document.querySelector('#ekspedisitransaksiberjalan' + change.doc.id).remove();
                        document.querySelector('#ekspedisiformatorder' + change.doc.id).remove();
                        document.querySelectorAll('.ekspedisi-transaksi-berjalan' + change.doc.id).forEach(eks => {
                        eks.remove();
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderCatatan(change.doc);
                        }
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderIndent(change.doc);
                        }
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderPerpindahan(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        renderHapusPerpindahan(change.doc);
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderPerpindahanSelesai(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                        document.querySelector('#jumlah-perpindahan-selesai').innerHTML = Number(document.querySelector('#jumlah-perpindahan-selesai').innerHTML) - 1;
                    }
                })
    }, err => console.log(err.message))            

        db.collection('tenorKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderTenorKalkulator(change.doc);
                        }
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderBiayaAdminKalkulator(change.doc);
                        }
                    } else if(change.type == 'modified'){
                        renderUpdateBiayaAdminKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))        

        db.collection('biayaBungaKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderBiayaBungaKalkulator(change.doc);
                        }
                    } else if(change.type == 'modified'){
                        renderUpdateBiayaBungaKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('aktivasiBiayaAdminKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderAktivasiBiayaAdminKalkulator(change.doc);
                        }
                    } else if(change.type == 'modified'){
                        renderUpdateAktivasiBiayaAdminKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('aktivasiBiayaBungaKalkulator').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderAktivasiBiayaBungaKalkulator(change.doc);
                        }
                    } else if(change.type == 'modified'){
                        renderUpdateAktivasiBiayaBungaKalkulator(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('transaksiBerjalan').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderTransaksiBerjalan(change.doc);
                        }
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderReturPending(change.doc);
                        }
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
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderReturSelesai(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdateReturSelesai(change.doc);
                    }
                })
    }, err => console.log(err.message))  

        db.collection('returDealerPending').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderReturDealerPending(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdateReturDealerPending(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('returDealerSelesai').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderReturDealerSelesai(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdateReturDealerSelesai(change.doc);
                    }
                })
    }, err => console.log(err.message))                    

        db.collection('pengeluaran').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderPengeluaran(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdatePengeluaran(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('pengeluaranSelesai').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderPengeluaranSelesai(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    }
                })
    }, err => console.log(err.message))   

        db.collection('eventKalender').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderEventKalender(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');                    
                        div.remove();
                        let eventKalender = document.querySelectorAll('.event-kalender');
                        let count = 0;
                        for(let x = 0; x < eventKalender.length; x++){
                            if(eventKalender[x].getAttribute('data-date') == div.getAttribute('data-date')){
                                let counter = 1;
                                count += counter;
                            }
                        }
                        if(count == 0){
                            let tanggalKalender = document.querySelectorAll('.day');
                            for(let i = 0; i < tanggalKalender.length; i++){
                            let li = tanggalKalender[i].querySelectorAll('li');
                                for(let y = 0; y < li.length; y++){
                                    if(li[y].getAttribute('data-date') == div.getAttribute('data-date')){
                                        if(li[y].querySelector('.event-calendar-available')){
                                            li[y].querySelector('.event-calendar-available').remove()   
                                        }
                                    }
                                }
                            }    
                        }
                    }
                })
    }, err => console.log(err.message))

        db.collection('pedoman').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderPedoman(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdatePedoman(change.doc);
                    }
                })
    }, err => console.log(err.message))

        db.collection('reqFakturPajak').onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
                changes.forEach(change =>{
                    if(change.type == 'added'){
                        if(!document.querySelector('[data-id="' + change.doc.id + '"]')){
                        renderReqFakturPajak(change.doc);
                        }
                    } else if(change.type == 'removed'){
                        let div = document.querySelector('[data-id="' + change.doc.id + '"]');
                        if(div.parentElement == listReqFakturPajakPending){
                            document.querySelector('#jumlah-req-faktur-pajak-pending').innerHTML = Number(document.querySelector('#jumlah-req-faktur-pajak-pending').innerHTML) - 1;
                        } else if(div.parentElement == listReqFakturPajakSelesai){
                            document.querySelector('#jumlah-req-faktur-pajak-selesai').innerHTML = Number(document.querySelector('#jumlah-req-faktur-pajak-selesai').innerHTML) - 1;
                        }
                        div.remove();
                    } else if(change.type == 'modified'){
                        renderUpdateReqFakturPajak(change.doc);
                    }
                })
    }, err => console.log(err.message))            
               

        $(document).ready(function(){
            setInterval(function(){ refreshOnJumlahTenor(); }, 100);
            setInterval(function(){ refreshOnRetur(); }, 1000)
            setInterval(function(){ refreshOnReturDealer(); }, 1000)
        });

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

        function refreshOnRetur(e){
            document.querySelector('#jumlah-retur-pending').innerHTML = document.querySelector('#list-retur-pending').childNodes.length;
            document.querySelector('#jumlah-retur-selesai').innerHTML = document.querySelector('#list-retur-selesai').childNodes.length;
        }

        function refreshOnReturDealer(e){
            document.querySelector('#jumlah-retur-dealer-pending').innerHTML = document.querySelector('#list-retur-dealer-pending').childNodes.length;
            document.querySelector('#jumlah-retur-dealer-selesai').innerHTML = document.querySelector('#list-retur-dealer-selesai').childNodes.length;
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
        $('#modaldaftarpeserta').modal('hide');
        document.querySelector('#tambah-peserta').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;
    })
   }
})


const daftarTugas = document.querySelector('#tambah-tugas');
daftarTugas.addEventListener('submit', (e) => {
    e.preventDefault();
    if(document.querySelector('#per-minggu').value == "" && document.querySelector('#per-hari').value == "" && document.querySelector('#per-jam').value == "" && document.querySelector('#per-menit').value == ""){
        alert("Pastikan Mengisi Kolom Waktu Pengerjaan untuk Melanjuti Proses Tambah Tugas");
    } else {
    db.collection('tugas').add({
        namaPeserta : daftarTugas['target-peserta'].value,
        kontenTugas : daftarTugas['konten-tugas'].value.replace(/\n\r?/g, '<br/>'),
        perMinggu : daftarTugas['per-minggu'].value,
        perHari : daftarTugas['per-hari'].value,
        perJam : daftarTugas['per-jam'].value,
        perMenit : daftarTugas['per-menit'].value,
        waktuRilis : new Date().getTime(),
        buktiPenyelesaian : 'Tidak Ada',
        filePenyelesaian : 'Tidak Ada',
        penggunaUID : auth.currentUser.uid,
        status : 'PENDING'
    }).then(() => {
        $('#modaltambahtugas').modal('hide');
        document.querySelector('#tambah-tugas').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;          
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
        $('#modalswot').modal('hide');
        document.querySelector('#tambah-swot').reset();
        document.getElementsByClassName('seleksi').selectedIndex = null;
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
        $('#modalkategorimenu').modal('hide');
        document.querySelector('#tambah-kategori-menu').reset();
    })
})

const daftarEkspedisiCetakLabel = document.querySelector('#tambah-ekspedisi-cetak-label');
daftarEkspedisiCetakLabel.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggal = new Date().getTime();
    db.collection('ekspedisiCetakLabel').add({
        tanggal: tanggal,
        penggunaUID: auth.currentUser.uid,
        namaEkspedisiCetakLabel: daftarEkspedisiCetakLabel['nama-ekspedisi-cetak-label'].value
    }).then(() => {
        $('#modalekspedisicetaklabel').modal('hide');
        document.querySelector('#tambah-ekspedisi-cetak-label').reset();
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
        pembuatCatatan: doc.data().username,
        penggunaUID: auth.currentUser.uid
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
        penggunaUID: auth.currentUser.uid,
        namaCustomer: daftarIndentCust['nama-customer-indent-cust'].value,
        kontakCustomer: daftarIndentCust['kontak-customer-indent-cust'].value,
        kontenIndent: daftarIndentCust['konten-indent-cust'].value.replace(/\n\r?/g, '<br/>'),
        produkIndent: daftarIndentCust['produk-indent-cust'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modalindentcust').modal('hide');
        document.querySelector('#tambah-indent-cust').reset();
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
            $('#modalperpindahanbarang').modal('hide');
            document.querySelector('#tambah-perpindahan-barang').reset();
        })
    } else {
    if(daftarPerpindahanBarang['tanggal-perpindahan-barang'].value < tanggalSekarang){
        alert('Cantumkan tanggal perpindahan barang dengan benar!')   
    } else {
        db.collection('perpindahan').add({
            tanggal: daftarPerpindahanBarang['tanggal-perpindahan-barang'].value,
            kontenPerpindahan: daftarPerpindahanBarang['konten-perpindahan-barang'].value.replace(/\n\r?/g, '<br/>')
        }).then(() => {
            $('#modalperpindahanbarang').modal('hide');
            document.querySelector('#tambah-perpindahan-barang').reset();
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
        $('#modaltenorkalkulator').modal('hide');
        document.querySelector('#tambah-tenor-kalkulator').reset();
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
        $('#modaltransaksiberjalan').modal('hide');
        document.querySelector('#tambah-transaksi-berjalan').reset();
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
        $('#modaltenorkalkulator').modal('hide');
        document.querySelector('#tambah-transaksi-berjalan').reset();
    })        
    }
})

const daftarRetur = document.querySelector('#tambah-retur');
daftarRetur.addEventListener('submit', function(e){
    e.preventDefault();
if(daftarRetur['status-retur'].value == 'Belum Selesai'){
    db.collection('returPending').add({
        tanggal: new Date().getTime(),
        penggunaUID: auth.currentUser.uid,
        namaCustomer: daftarRetur['customer-retur'].value,
        kontakCustomer: daftarRetur['kontak-retur'].value,
        produkRetur: daftarRetur['produk-retur'].value.replace(/\n\r?/g, '<br/>'),
        keluhanCustomer: daftarRetur['keluhan-retur'].value.replace(/\n\r?/g, '<br/>'),
        keteranganRetur: daftarRetur['keterangan-retur'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modalretur').modal('hide');
        document.querySelector('#tambah-retur').reset();
    })
    } else {
    db.collection('returSelesai').add({
        tanggal: new Date().getTime(),
        penggunaUID: auth.currentUser.uid,
        namaCustomer: daftarRetur['customer-retur'].value,
        kontakCustomer: daftarRetur['kontak-retur'].value,
        produkRetur: daftarRetur['produk-retur'].value.replace(/\n\r?/g, '<br/>'),
        keluhanCustomer: daftarRetur['keluhan-retur'].value.replace(/\n\r?/g, '<br/>'),
        keteranganRetur: daftarRetur['keterangan-retur'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modalretur').modal('hide');
        document.querySelector('#tambah-retur').reset();      
    })
    }
})

const daftarReturDealer = document.querySelector('#tambah-retur-dealer');
daftarReturDealer.addEventListener('submit', function(e){
    e.preventDefault();
if(daftarReturDealer['status-retur-dealer'].value == 'Belum Selesai'){
    db.collection('returDealerPending').add({
        tanggal: new Date().getTime(),
        namaDealer: daftarReturDealer['dealer-retur'].value,
        produkRetur: daftarReturDealer['produk-retur-dealer'].value.replace(/\n\r?/g, '<br/>'),
        keteranganRetur: daftarReturDealer['keterangan-retur-dealer'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modalreturdealer').modal('hide');
        document.querySelector('#tambah-retur-dealer').reset();
    })
    } else {
    db.collection('returDealerSelesai').add({
        tanggal: new Date().getTime(),
        namaDealer: daftarReturDealer['dealer-retur'].value,
        produkRetur: daftarReturDealer['produk-retur-dealer'].value.replace(/\n\r?/g, '<br/>'),
        keteranganRetur: daftarReturDealer['keterangan-retur-dealer'].value.replace(/\n\r?/g, '<br/>')
    }).then(() => {
        $('#modalreturdealer').modal('hide');
        document.querySelector('#tambah-retur-dealer').reset();      
    })
    }
})


const daftarBelanja = document.querySelector('#form-daftar-belanja');
daftarBelanja.addEventListener('submit', (e) => {
    e.preventDefault();
    let tanggal = new Date().getTime();
    let konfirmasi = confirm(`Apa anda yakin untuk men-submit rincian berikut dengan jumlah pengeluaran sebesar ${    "Rp " + Number(daftarBelanja['jumlah-pengeluaran-belanja'].value).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ",00"}`);
    if(konfirmasi == true){
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
    db.collection('pengeluaran').add({
        tanggal: tanggal,
        penggunaBelanja: doc.data().username,
        penggunaUID: auth.currentUser.uid,
        deskripsiItem: daftarBelanja['deskripsi-item-belanja'].value.replace(/\n\r?/g, '<br/>'),
        jumlahPengeluaran: daftarBelanja['jumlah-pengeluaran-belanja'].value
    }).then(() => {
        document.querySelector('#form-daftar-belanja').reset();
        })
    })
    }
})

const submitEventKalender = document.querySelector('#submit-event-kalender');
submitEventKalender.addEventListener('click', (e) => {
    e.stopPropagation();
    let tanggalKalender = document.querySelectorAll('.day')
    for(let z = 0; z < tanggalKalender.length; z++){
        let li = tanggalKalender[z].querySelectorAll('li');
        for(let i = 0; i < li.length; i++){
            if(li[i].getAttribute('date-active') == 'yes'){
                db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
                db.collection('eventKalender').add({
                    tanggal: li[i].getAttribute('data-date'),
                    penggunaEvent: doc.data().username,
                    penggunaUID: auth.currentUser.uid,
                    deskripsiEvent: document.querySelector('#konten-event-kalender').value
                }).then(() => {
                    document.querySelector('#konten-event-kalender').value = null;
                    })
                })
            } 
        }
    }
})

const daftarPedomanGalaxy = document.querySelector('#tambah-pedoman-galaxy');
daftarPedomanGalaxy.addEventListener('submit', (e) => {
    e.preventDefault();
        db.collection('pedoman').add({
            tanggal : new Date().getTime(),
            judul : daftarPedomanGalaxy['judul-pedoman'].value,
            keterangan: daftarPedomanGalaxy['keterangan-pedoman'].value.replace(/\n\r?/g, '<br/>'),
        }).then(() => {
            daftarPedomanGalaxy.value = null;
        })
})

const daftarReqFakturPajak = document.querySelector('#tambah-req-faktur-pajak');
daftarReqFakturPajak.addEventListener('submit', (e) => {
    e.preventDefault();
    let hari = String(new Date().getDate()).padStart(2, '0');
    let bulan = String(new Date().getMonth() + 1).padStart(2, '0');
    let tahun = new Date().getFullYear();
    let tanggalSekarang = tahun + '-' + bulan + '-' + hari;    
    let tanggal = new Date().getTime();    
    if(daftarReqFakturPajak['tanggal-req-faktur-pajak'].value > tanggalSekarang){
        alert('Sepertinya anda mencantumkan tanggal sebelum kejadian terjadi');
    } else if(daftarReqFakturPajak['tanggal-req-faktur-pajak'].value == 0){
    db.collection('reqFakturPajak').add({
        tanggal: tanggal,
        keterangan: daftarReqFakturPajak['keterangan-req-faktur-pajak'].value.replace(/\n\r?/g, '<br/>'),
        status : 'PENDING'
    }).then(() => {
        $('#modaltransaksiberjalan').modal('hide');
        document.querySelector('#tambah-transaksi-berjalan').reset();
    })
    } else {
    db.collection('reqFakturPajak').add({
        tanggal: daftarReqFakturPajak['tanggal-req-faktur-pajak'].value,
        keterangan: daftarReqFakturPajak['keterangan-req-faktur-pajak'].value.replace(/\n\r?/g, '<br/>'),
        status : 'PENDING'
    }).then(() => {
        $('#modalreqfakturpajak').modal('hide');
        e.target.reset();
    })        
    }
})

const formDaftar = document.querySelector('#form-daftar');
formDaftar.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = formDaftar['emaildaftar'].value;
    let password = formDaftar['passworddaftar'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('pengguna').doc(cred.user.uid).set({
            username : formDaftar['username'].value
        });
    }).then(() => {
      $('#modaldaftar').modal('hide');
      formDaftar.reset();
    });
});

const keluar = document.querySelector('#sign-out');
keluar.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    db.collection('pengguna').doc(auth.currentUser.uid).get().then(function(doc){
        let konfirmasi = confirm("Apa anda yakin ingin keluar?");
        if(konfirmasi){
            auth.signOut().then(function(){
                window.location.reload();
            })
        }
    });
});


const formMasuk = document.querySelector('#form-masuk');
formMasuk.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = formMasuk['emailmasuk'].value;
    let password = formMasuk['passwordmasuk'].value;
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        $('#modallogin').modal('hide');
        formMasuk.reset();
    }, err => {
        if(err.code == 'auth/user-not-found'){
            alert('User tidak ditemukan.')
        } else if(err.code == 'auth/wrong-password'){
            alert('Email atau Password yang anda masukkan salah!')
        } 
  });
});

