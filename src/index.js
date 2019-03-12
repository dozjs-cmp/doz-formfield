import {Component} from "doz";

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
            showValue: false
        }
    }

    template(h) {
        let input = '';

        switch (this.props.type) {
            case 'select':

                input = `
                    <input 
                        d-ref="selectHidden" 
                        name="${this.props.name}" 
                        type="hidden"
                    >
                    <select 
                        id="${this.props.id}" 
                        d-ref="field" 
                        class="${this.props.classField}"
                        required="${this.props.required}"
                    >
                    ${this.each(this.props.options, item => {
                    if (typeof item === 'object')
                        return `
                                <option ${this.props.value == item.value ? 'selected' : ''} value="${item.value}">${item.key} ${this.props.showValue ? `(${item.value})` : ''}</option>
                            `;
                    else
                        return `
                                <option ${this.props.value === item ? 'selected' : ''} value="${item}">${item}</option>
                            `
                })}
                    </select>
                `;
                break;

            case 'textarea':
                input = `
                    <textarea 
                        id="${this.props.id}" 
                        d-ref="field" 
                        name="${this.props.name}" 
                        class="${this.props.classField}"
                        required=${this.props.required}
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
                        required=${this.props.required}
                    > $${this.props.done} <br/>
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
                        d-bind="value" 
                        class="${this.props.classField}"
                        required="${this.props.required}"
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
                        
                        class="${this.props.classField}"
                        required=${this.props.required}
                    >
                `
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
                <div>
                    ${this.props.value}
                </div>
                
            </div>
        `
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
            this.ref.selectHidden.addEventListener('change', e => {
                this.$firstValue = e.target.value;
                this.ref.field.value = e.target.value;
            });
            this.ref.field.addEventListener('change', e => {
                this.ref.selectHidden.value = e.target.value;
            });
            this.$loadStore();
        }
    }

    onUpdate() {

    }

    onDestroy() {

    }

};