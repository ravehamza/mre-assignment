import { submitBusiness } from './../../store/contact.action';
import { Business } from './../../_shared/model/model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  modalGroupName: FormControl = new FormControl('');
  groupOption = [];
  selectedOption: string = '';
  displayStyle = 'none';
  data$!: Observable<any>;
  typeOption = ['Owner', 'Point of Contact', 'Application Review', 'Architect'];
  isLoaded: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ business: Business }>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      businessName: this.fb.control(''),
      address: this.fb.control(''),
      groupName: this.fb.control(''),
      contactinfo: this.fb.array([]),
    });
    this.data$ = this.store.pipe(select('business'));
  }

  contactInfo(): FormArray {
    return this.form.get('contactinfo') as FormArray;
  }

  newContact(): FormGroup {
    return this.fb.group({
      type: this.fb.control(''),
      name: this.fb.control(''),
      legalName: this.fb.control(''),
      phoneNumber: this.fb.array([]),
      emailAddress: this.fb.array([]),
    });
  }

  addContact() {
    this.contactInfo().push(this.newContact());
    this.addContactEmail(0);
    this.addContactPhone(0);
  }

  deleteContact(index: number) {
    this.store.subscribe((state) => console.log(state)).unsubscribe();
  }

  removeContactControl(index: number) {
    this.contactInfo().removeAt(index);
  }

  contactEmail(index: number): FormArray {
    return this.contactInfo().at(index).get('emailAddress') as FormArray;
  }

  newEmail(): FormGroup {
    return this.fb.group({
      email: '',
    });
  }

  addContactEmail(index: number) {
    this.contactEmail(index).push(this.newEmail());
  }

  contactPhone(index: number): FormArray {
    return this.contactInfo().at(index).get('phoneNumber') as FormArray;
  }

  newPhone(): FormGroup {
    return this.fb.group({
      phone: '',
    });
  }

  addContactPhone(index: number) {
    this.contactPhone(index).push(this.newPhone());
  }

  getValue() {
    this.store.dispatch(submitBusiness({ business: this.form.value }));
    this.store.subscribe((state) => console.log(state)).unsubscribe();
    this.form.reset();
    this.contactInfo().removeAt(0);
    this.isLoaded = true;
  }

  selectOption(e: any) {
    this.selectedOption = e.target.value;
    if (this.selectedOption === '1') {
      this.displayStyle = 'block';
    }
  }

  openPopup() {
    this.displayStyle = 'block';
  }

  savePopup() {
    debugger;
    const val = this.modalGroupName.value as never;
    this.groupOption.push(val);
    this.displayStyle = 'none';
    this.modalGroupName.reset();
  }

  close() {
    this.displayStyle = 'none';
  }
}
