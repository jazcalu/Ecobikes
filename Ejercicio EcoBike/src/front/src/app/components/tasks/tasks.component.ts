import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[];
  tiendaNom: string;
  productoNom: string;
  productoCant: number;
  productoPrec: number;
  vendedorNick: string;

  
  constructor(private taskService: TaskService) {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        //VER LA DATA
        console.log('data de base datos', this.tasks);
      });
  }
  ngOnInit() {


  }

  addTask(event) {
    const response = confirm(`Estas seguro de agregar los datos
                              Tienda:  ${this.tiendaNom}
                              Producto:  ${this.productoNom}
                              Cantidad:  ${this.productoCant}
                              Precio:  ${this.productoPrec}
                              Vendedor usuario:  ${this.vendedorNick}`);
    event.preventDefault();
    console.log('Dato Obtenido Prueba', this.tiendaNom, this.productoNom, this.productoCant, this.productoPrec, this.vendedorNick);
    const newTask: Task = {
      tiendaNom: this.tiendaNom,
      productoNom: this.productoNom,
      productoCant: this.productoCant,
      productoPrec: this.productoPrec,
      vendedorNick: this.vendedorNick,
      isDone: false
    };
    this.taskService.addTask(newTask)
      .subscribe(task => {
        if (task.productoCant == null || task.productoPrec == null){
          confirm('Datos ingresos incorrectos, ingrese nuevamente');
        }

        this.tasks.push(task);
        //LIMPIAR FORMULARIO
        this.tiendaNom = '';
        this.productoNom = '';
        this.productoCant = +('');
        this.productoPrec = +('');
        this.vendedorNick = '';
      });
  }
  deleteTask(id) {
    const response = confirm('Estas seguro de ELIMINAR esta venta');
    if (response) {
      const tasks = this.tasks;
      this.taskService.deleteTask(id)
        .subscribe(data => {
          if (data.n === 1) {
            for (let i = 0; i < tasks.length; i++) {
              if (tasks[i]._id === id) {
                tasks.splice(i, 1);
              }
            }
          }
          console.log('id borrado', data);
        })
    }
    return false;
  }

  updateTask(task: Task) {
    const newTask = {
      _id: task._id,
      tiendaNom: task.tiendaNom,
      productoNom: task.productoNom,
      productoCant: task.productoCant,
      productoPrec: task.productoPrec,
      vendedorNick: task.vendedorNick,
      isDone: !task.isDone
    };
    
    this.taskService.updateTask(newTask)
      .subscribe(res => {
        task.isDone = !task.isDone;
      });
    console.log(task);
  }

  

}
