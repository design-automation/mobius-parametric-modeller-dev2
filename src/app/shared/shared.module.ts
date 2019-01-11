/*
 *  This module is to be imported ONLY by the AppModule
 *  Contains all global services
 *
 */
import { AngularSplitModule } from 'angular-split';
// @angular stuff
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSliderModule, MatCheckboxModule, MatIconModule } from '@angular/material';
// app directives
import { MbFileReaderDirective } from './directives/filesys';
// app components
import { ExecuteComponent } from './components/execute/execute.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PanelHeaderComponent } from './components/header/panel-header.component';
import { AddOutputComponent } from './components/add-components/add_output.component';
import { AddNodeComponent } from './components/add-components/add_node.component';
import { AddInputComponent } from './components/add-components/add_input.component';
// import { ParameterViewerComponent } from './components/parameter-viewer/parameter-viewer.component';
// import { InputPortViewerComponent } from './components/parameter-viewer/input-port-viewer/input-port-viewer.component';
// import { ProcedureInputViewerComponent } from './components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component';
import { NewFileComponent, SaveFileComponent, LoadFileComponent } from './components/file';
import { NotificationComponent } from './components/notification/notification.component';
// app model viewers
import { DataViewersContainer } from '../model-viewers/model-viewers-container.module';
import { LoadUrlComponent } from './components/file/loadurl.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    providers: [ ],
    declarations: [
            MbFileReaderDirective,
            ExecuteComponent,
            PageNotFoundComponent,
            NavigationComponent,
            PanelHeaderComponent,
            NotificationComponent,
            AddNodeComponent, AddInputComponent, AddOutputComponent,
            // ParameterViewerComponent,  InputPortViewerComponent, ProcedureInputViewerComponent,
            NewFileComponent, SaveFileComponent, LoadFileComponent, LoadUrlComponent,
            SpinnerComponent
        ],
    imports: [
            CommonModule,
            RouterModule,
            MatSliderModule, MatCheckboxModule,
            DataViewersContainer,
            AngularSplitModule,
            FormsModule,
            MatIconModule,
            /*
            MatMenuModule,
            MatButtonModule,
            MatExpansionModule,
            MatSelectModule,
            MatFormFieldModule,
            */
        ],
    entryComponents: [  ],
    exports: [
            FormsModule,
            MatIconModule,
            MatSliderModule,
            /*
            MatMenuModule,
            MatButtonModule,
            MatExpansionModule,
            MatSelectModule,
            MatFormFieldModule,
            */
            DataViewersContainer,
            AngularSplitModule,
            MbFileReaderDirective,
            ExecuteComponent,
            PageNotFoundComponent,
            NavigationComponent,
            PanelHeaderComponent,
            AddNodeComponent,
            AddInputComponent,
            AddOutputComponent,
            SpinnerComponent,
            // ParameterViewerComponent,
            NotificationComponent,
            NewFileComponent, SaveFileComponent, LoadFileComponent, LoadUrlComponent
    ]
})
export class SharedModule {
    constructor(@Optional() @SkipSelf() shared: SharedModule) {
        /*
        /// Prevents any module apart from AppModule from re-importing
        if(shared){
            throw new Error("Core Module has already been imported");
        }
        */
    }
}
