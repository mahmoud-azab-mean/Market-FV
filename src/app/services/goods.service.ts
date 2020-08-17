import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private af: AngularFirestore, private afs: AngularFireStorage) { }

  getAllGoods() {
    return this.af.collection('goods').snapshotChanges();
  }
  addNewGood(name: string, price: number, image: File) {
    return new Promise((resolve) => {
          let ref = this.afs.ref('goods/' + image.name)
        ref.put(image).then(() => {
          ref.getDownloadURL().subscribe(photoUrl => {
            this.af.collection('goods').add({
              name,
              price,
              photoUrl
            }).then(() => resolve('تم الاضافه بنجاح'))
          })
        })
        })
  }

}
