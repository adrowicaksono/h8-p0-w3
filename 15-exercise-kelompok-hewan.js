function groupAnimals(animals) {
	// membuat array tampungan untuk  membuat aray baru
	var coll = [];
	//coll[0]=['capung'];
	
	//--menelusuri array animals
	for (a = 0; a <= animals.length - 1; a++) {
		var hitung = 0;

		//proses membandingkan array animals dengan array coll
		//--menelusuri array-array coll
		for (b = 0; b <= coll.length - 1; b++) {
			//--menelusuri array-array yang berada di dalam array-array coll
			for (c = 0; c <= coll[b].length - 1; c++) {
				//console.log('ini anim : ' + animals[a][0])
				//console.log('ini : '+coll[b][c][0][0]);
				//tidak bisa push disini karena akan mempengaruhi length dari coll[b]
				//kalo ada harusnya di push, tapi tidak bisa dilakukan disini
        //--lakukan penelusuran di array tertentu pada array-array coll yang sudah sudah teridentifikasi dengan indeks
				//--menelusuri huruf pertama di dalam array-array di dalam array-array coll
				if (animals[a][0] === coll[b][c][0]) {
				  //--jika ada huruf depan yang sama maka lakukan push di array-array yang ada didalam coll ini
					coll[b].push(animals[a]);
					//--memberitahu bahwa sudah 2x atau beberapa kali diinput , akan dikosongkan setiap animals[a] berganti.
					hitung = hitung + 1;
					//console.log(animals[a]+ ':' + hitung);
					//console.log('perulangan c : '+c+animals[a]);

					//--lakukan break agar tidak terjadi infiniti loop yang disebabkan array-array di dalam array-array coll bertambah
					break;
					//stop apabila jumlah animals sudah cukup, tapi tidak dilakukan disini karena hanya menghentikan array animals indek yang terakhir
					//console.log(a);
					//console.log(animals.length-1);
					//console.log(animals[a])
					//console.log(animals[animals.length-1])
				}
				//kenapa push tidak dilakukan disini, karena setiap perulangan b akan tetap dipush setiap masuk else
				//karena harus cek per indeks tiap kamar, mungkinkah setelah itu di push dan di break
			}

			//jika di push disini, ga bisa ngulang karena length sudah limit
		}
		//jika setelah di cek tidak ada maka push dari sini
		//tapi kalo di push disini akan terus dipush alias dobel, tidak ada if nya-- antisipasi yang sudah masuk di c tidak terpush ulang
		//jika sudah ada di coll, maka tidak usah di push
		//bikin perulangan dengan nilai coll length yang baru

		//--baru bisa lakukan push disini agar tidak terjadi push yang berulang-ulang
		coll.push([animals[a]]);

		//untuk antisipasi push yang dobel, karena sebelum nya sudah dipush ketika menemukan abjad depan yang sama
		//jika sudah diinput 2x maka pasti di push dibelakang, maka hapus dengan pop
		if (hitung > 0) {
			coll.pop();
		}
	}

	//------------------
	return coll.sort();
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log('----------------------------------------')
console.log(
	groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak'])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
