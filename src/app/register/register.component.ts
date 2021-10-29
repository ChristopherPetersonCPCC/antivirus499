import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {UserService} from '../_services/user.service';

@Component({ templateUrl: 'register.component.html', styleUrls: ['./bootstrap.min.css'] })
export class RegisterComponent {}
