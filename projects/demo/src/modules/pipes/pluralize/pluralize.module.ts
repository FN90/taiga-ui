import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiPluralizePipeModule} from '@taiga-ui/core';
import {TuiInputSliderModule} from '@taiga-ui/kit';
import {ExampleTuiPluralizeComponent} from './pluralize.component';

@NgModule({
    imports: [
        TuiPluralizePipeModule,
        TuiInputSliderModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiPluralizeComponent)),
    ],
    declarations: [ExampleTuiPluralizeComponent],
    exports: [ExampleTuiPluralizeComponent],
})
export class ExampleTuiPluralizeModule {}
