import {Component} from "doz";
import axios from 'axios'
import typis from 'typis'

function normalizeOptions(options) {
    if (typis.is(options, 'array')) {
        return options;
    } else {
        return Object.entries(options).map(([key, value]) => ({key, value}));
    }
}

export default class extends Component{

    constructor(o) {
        super(o);

        this. props = {
            id: '',
            type: 'text',
            label: '',
            name: '',
            options: [],
            required: false,
            value: '',
            done: false,
            description: '',
            errors: '',
            classInner: '',
            classField: '',
            storeUrl: '',
            rowPath: '',
            valueRow: '',
            displayRow: '',
            showValue: false,
            showOpenUrl: true,
            disabled: false
        }
    }

    template(h) {
        let input = '';

        switch (this.props.type) {
            case 'select':

                input = `
                    <select
                         
                        id="${this.props.id}"
                        name="${this.props.name}" 
                        d-ref="field" 
                        class="${this.props.classField}"
                        ${this.props.required ? 'required' : ''}
                        ${this.props.disabled ? 'disabled' : ''}
                    >
                    ${this.each(normalizeOptions(this.props.options), item => {
                    if (typeof item === 'object')
                        return `
                                <option ${this.props.value == item.value ? 'selected' : ''} value="${item.value}">${item.key} ${this.props.showValue ? `(${item.value})` : ''}</option>
                            `;
                    else
                        return `
                                <option ${this.props.value === item ? 'selected' : ''} value="${item}">${item}</option>
                            `;
                    })}
                    </select>
                    <input
                         
                        d-ref="selectHidden"  
                        type="hidden"
                        d-bind="value"
                    >
                `;
                break;

            case 'textarea':
                input = `
                    <textarea 
                                               
                        id="${this.props.id}" 
                        d-ref="field" 
                        name="${this.props.name}" 
                        class="${this.props.classField}"
                        ${this.props.required ? 'required' : ''}
                        ${this.props.disabled ? 'disabled' : ''}
                    > ${this.props.value}</textarea>
                `;
                break;

            case 'checkbox':
                input = `
                    <input
                         
                        id="${this.props.id}" 
                        type="checkbox" 
                        d-bind="done"  
                        d-ref="field" 
                        name="${this.props.name}" 
                        class="${this.props.classField}"
                        ${this.props.required ? 'required' : ''}
                        ${this.props.disabled ? 'disabled' : ''}
                    >
                `;
                break;

            case 'color':
                input = `
                    <input
                         
                        d-ref="colorInput" 
                        type="color" 
                        d-bind="value" 
                        style="vertical-align: bottom"
                    >
                    <input
                         
                        d-ref="field" 
                        id="${this.props.id}" 
                        type="text" 
                        name="${this.props.name}" 
                        value="${this.props.value}" 
                        class="${this.props.classField}"
                        ${this.props.required ? 'required' : ''}
                        ${this.props.disabled ? 'disabled' : ''}
                        style="display: inline; width: inherit;"
                        size="7"
                        maxlength="7"
                        pattern="^#(?:[0-9a-fA-F]{3}){1,2}$"
                    >
                `;
                break;

            default:
                input = `
                    <input
                         
                        d-ref="field" 
                        id="${this.props.id}" 
                        type="${this.props.type}" 
                        name="${this.props.name}" 
                        d-bind="value"
                        ${this.props.required ? 'required' : ''}
                        ${this.props.disabled ? 'disabled' : ''}
                        class="${this.props.classField}"
                    >
                `;
                if (this.props.type === 'url' && this.props.showOpenUrl) {
                    input += `<small style="text-decoration: underline; cursor: pointer" onclick="this.$openUrl()">Open url</small>`;
                }
        }

        return `
            <div class="${this.props.classInner}">
                <label for="${this.props.id}">
                    ${this.props.label} ${this.props.required ? '<span class="required">*</span>' : ''} 
                </label>
                ${this.props.description ? `<div>${this.props.description}</div>` : ''}
                <div>
                    ${input}
                </div>
            </div>
        `
    }

    $openUrl() {
        if(this.ref.field.value) {
            window.open(this.ref.field.value);
        }
    }

    setNew() {
        this.props.value = ''
    }

    onCreate() {
        this.props.id = this.props.id || `form-field-${Math.random()}`;
    }

    onMount() {
        if (this.props.type === 'color') {
            this.ref.colorInput.addEventListener('change', e => {
                this.ref.field.value = e.target.value;
            });
            this.ref.field.addEventListener('change', e => {
                this.ref.colorInput.value = e.target.value;
            });
            const height = this.ref.field.getBoundingClientRect().height;
            this.ref.colorInput.style.height = height + 'px';
            this.ref.colorInput.style.width = height + 'px';
        } else if (this.props.type === 'select') {
            this.ref.selectHidden.value = this.ref.field.value;
            this.ref.selectHidden.addEventListener('change', e => {
                this.$firstValue = e.target.value;
                this.ref.field.value = e.target.value;
            });
            this.ref.field.addEventListener('change', e => {
                this.ref.selectHidden.value = e.target.value;
            });

            let options = normalizeOptions(this.props.options);

            if (typeof options[0] === 'string') {
                this.props.value = options[0];
            } else if (typeof options[0] === 'object') {
                this.props.value = options[0].value;
            } else {}

            //this.$loadStore();
        }
    }

    onUpdate() {

    }

    onDestroy() {

    }

};