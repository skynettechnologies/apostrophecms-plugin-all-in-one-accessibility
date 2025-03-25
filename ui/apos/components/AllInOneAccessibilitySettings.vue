<template>
    <AposModal :modal="modal" modal-title="All in One Accessibility" @esc="cancel" @no-modal="$emit('safe-close')"
        @show-modal="modal.showModal = true" @inactive="modal.active = false" @ready="ready">
        <template #secondaryControls>
            <AposButton ref="cancelButton" type="default" label="apostrophe:cancel" @click="cancel" />
        </template>
        <template #main>
            <AposModalBody>
                <template #bodyMain>
                    <div :style="elementStyle">
                        <div class="all-in-one-accessibility-strapi-container">
                            <div class="container">
                                <div class="set-width">
                                    <div class="all-in-one-accessibility-wrap">
                                        <div class="accessibility-settings">
                                            <h1><b></b> </h1>
                                            <img :src="allinoneaccessibilitylogo"
                                                alt="All in One Accessibility - Skynet Technologies"
                                                :style="logoStyle" />
                                            <h1><b></b></h1>
                                            <div class="all-one-accessibility-form">
                                                <form @submit.prevent="onSaveChanges">
                                                    <div v-if="!isValid" class="mb-30 row">
                                                        <label class="col-sm-12 col-form-label">
                                                            <div class="form-text col-sm-12 col-form-label">
                                                                Please
                                                                <a href="https://ada.skynettechnologies.us/trial-subscription"
                                                                    target="_blank" rel="noopener noreferrer">
                                                                    &nbsp;Upgrade&nbsp;
                                                                </a>
                                                                to the full version of All in One Accessibility Pro.
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="mb-30 row">
                                                        <label for="colorcode" class="col-sm-3 col-form-label">Hex
                                                            color code:</label>
                                                        <div class="col-sm-9">
                                                            <input v-model="parameters.hexaColor" class="form-control"
                                                                id="colorcode" name="colorcode" />
                                                        </div>
                                                        <div class="col-sm-3"></div>
                                                        <div class="form-text col-sm-9">
                                                            You can customize the ADA Widget color. For example:
                                                            FF5733
                                                        </div>
                                                    </div>
                                                    <div class="mb-30 row">
                                                        <label class="col-sm-12 col-form-label">Select Widget
                                                            Size:</label>
                                                        <div class="col-sm-12 three-col">
                                                            <div class="form-item">
                                                                <input type="radio" id="edit-widget-size-regularsize"
                                                                    value="0" v-model="parameters.widget_size"
                                                                    class="form-radio" />
                                                                <label for="edit-widget-size-regularsize"
                                                                    class="edit-position">Regular Size</label>
                                                            </div>
                                                            <div class="form-item">
                                                                <input type="radio" id="edit-widget-size-oversize"
                                                                    value="1" v-model="parameters.widget_size"
                                                                    class="form-radio" />
                                                                <label for="edit-widget-size-oversize"
                                                                    class="edit-position">Over Size</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="icon-custom-size-wrapper mb-3">
                                                        <div class="row align-items-center mb-30">
                                                            <div class="col">
                                                                <label class="col-sm-12 col-form-label">Enable
                                                                    precise accessibility widget icon
                                                                    position:</label>
                                                            </div>
                                                            <div class="col-auto">
                                                                <!-- <input type="checkbox" id="custom-size-switcher" v-model="isSizeSwitcherEnabled"
                            class="custom-switcher" /> -->
                                                                <label class="custom-switch">
                                                                    <input type="checkbox" id="custom-size-switcher"
                                                                        v-model="isSwitcherEnabled"
                                                                        class="custom-switcher" />
                                                                    <span class="slider"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-30 row">
                                                        <div class="icon-custom-position-wrapper mb-3">
                                                            <div class="mb-2">
                                                                <div v-if="!isSwitcherEnabled">
                                                                    <label class="col-sm-12 col-form-label">
                                                                        Where would you like to place the
                                                                        accessibility icon on your site?:
                                                                    </label>
                                                                    <div class="col-sm-12 three-col">
                                                                        <div class="form-item">
                                                                            <input type="radio"
                                                                                id="edit-position-top-left"
                                                                                value="top_left"
                                                                                v-model="parameters.position"
                                                                                class="form-radio" />
                                                                            <label for="edit-position-top-left"
                                                                                class="edit-position">Top
                                                                                left</label>
                                                                        </div>
                                                                        <div class="form-item">
                                                                            <input type="radio"
                                                                                id="edit-position-top-center"
                                                                                value="top_center"
                                                                                v-model="parameters.position"
                                                                                class="form-radio" />
                                                                            <label for="edit-position-top-center"
                                                                                class="edit-position">Top
                                                                                Center</label>
                                                                        </div>
                                                                        <div class="form-item">
                                                                            <input type="radio"
                                                                                id="edit-position-top-right"
                                                                                value="top_right"
                                                                                v-model="parameters.position"
                                                                                class="form-radio" />
                                                                            <label for="edit-position-top-right"
                                                                                class="edit-position">Top
                                                                                Right</label>
                                                                        </div>
                                                                        <div class="form-item">
                                                                            <input type="radio"
                                                                                id="edit-position-middle-left"
                                                                                value="middle_left"
                                                                                v-model="parameters.position"
                                                                                class="form-radio" />
                                                                            <label for="edit-position-middle-left"
                                                                                class="edit-position"> Middle
                                                                                left</label>
                                                                        </div>
                                                                        <div class="form-item">
                                                                            <input type="radio"
                                                                                id="edit-position-middle-right"
                                                                                value="middle_right"
                                                                                v-model="parameters.position"
                                                                                class="form-radio" />
                                                                            <label for="edit-position-middle-right"
                                                                                class="edit-position">Middle
                                                                                Right</label>
                                                                        </div>
                                                                        <div class="form-item">
                                                                            <input type="radio"
                                                                                id="edit-position-bottom-left"
                                                                                value="bottom_left"
                                                                                v-model="parameters.position"
                                                                                class="form-radio" />
                                                                            <label for="edit-position-bottom-left"
                                                                                class="edit-position">Bottom
                                                                                left</label>
                                                                        </div>
                                                                        <div class="form-item">
                                                                            <input type="radio"
                                                                                id="edit-position-bottom-center"
                                                                                value="bottom_center"
                                                                                v-model="parameters.position"
                                                                                class="form-radio" />
                                                                            <label for="edit-position-bottom-center"
                                                                                class="edit-position">Bottom
                                                                                Center</label>
                                                                        </div>
                                                                        <div class="form-item">
                                                                            <input type="radio"
                                                                                id="edit-position-bottom-right"
                                                                                value="bottom_right"
                                                                                v-model="parameters.position"
                                                                                class="form-radio" />
                                                                            <label for="edit-position-bottom-right"
                                                                                class="edit-position">Bottom
                                                                                Right</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-if="isSwitcherEnabled"
                                                                    class="custom-position-controls">
                                                                    <div class="row mb-3 d-flex align-items-center">
                                                                        <div class="col-auto">
                                                                            <input type="number" min="0" max="250"
                                                                                id="custom_position_x_value"
                                                                                v-model="widgetSettings.custom_position_x_value"
                                                                                class="form-control"
                                                                                @input="handleInput" />
                                                                        </div>
                                                                        <div
                                                                            class="col-auto d-flex justify-content-center align-items-center">
                                                                            <span>PX</span>
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <select id="custom_position_left_right"
                                                                                v-model="widgetSettings.custom_position_left_right"
                                                                                class="form-select">
                                                                                <option value="cust-pos-to-the-right">To
                                                                                    the right</option>
                                                                                <option value="cust-pos-to-the-left">To
                                                                                    the left</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mb-3 d-flex align-items-center">
                                                                        <div class="col-auto">
                                                                            <input type="number" min="0" max="250"
                                                                                id="custom_position_y_value"
                                                                                v-model="widgetSettings.custom_position_y_value"
                                                                                class="form-control"
                                                                                @input="handleInput2" />
                                                                        </div>
                                                                        <div
                                                                            class="col-auto d-flex justify-content-center align-items-center">
                                                                            <span>PX</span>
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <select id="custom_position_top_bottom"
                                                                                v-model="widgetSettings.custom_position_top_bottom"
                                                                                class="form-select">
                                                                                <option value="cust-pos-to-the-lower">To
                                                                                    the bottom</option>
                                                                                <option value="cust-pos-to-the-upper">To
                                                                                    the top</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="description">0 - 250px are permitted
                                                                        values</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="icon-type-wrapper row" :class="{ 'd-none': !isValid }">
                                                        <label class="col-sm-12 col-form-label">Select icon
                                                            type:</label>
                                                        <div class="col-sm-12">
                                                            <div class="row">
                                                                <div class="col-auto mb-30"
                                                                    v-for="(icon, index) in iconTypes" :key="index">
                                                                    <div
                                                                        class="form-item js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                                                                        <input type="radio"
                                                                            :id="'edit-type-' + (index + 1)"
                                                                            :value="icon.value"
                                                                            v-model="parameters.icontype"
                                                                            class="form-radio" />
                                                                        <label :for="'edit-type-' + (index + 1)">
                                                                            <img :src=icon.src alt="" width="65"
                                                                                height="65" />
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-30 row">
                                                        <div class="icon-custom-size-wrapper mb-3">
                                                            <!-- <div class="row align-items-center mb-30"> -->
                                                            <div class="col">
                                                                <label class="col-sm-12 col-form-label">Enable icon
                                                                    custom size:</label>
                                                            </div>
                                                            <div class="col-auto">
                                                                <!-- <input type="checkbox" id="custom-size-switcher" v-model="isSizeSwitcherEnabled"
                            class="custom-switcher" /> -->
                                                                <label class="custom-switch">
                                                                    <input type="checkbox" id="custom-size-switcher"
                                                                        v-model="isSizeSwitcherEnabled"
                                                                        class="custom-switcher" />
                                                                    <span class="slider"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div v-if="!isSizeSwitcherEnabled">
                                                            <label class="col-sm-12 col-form-label">Select icon
                                                                size:</label>
                                                            <div class="col-sm-12">
                                                                <div class="row">
                                                                    <div class="col-auto mb-30"
                                                                        v-for="(size, index) in iconSizes" :key="index">
                                                                        <div
                                                                            class="form-item js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                                                                            <input type="radio"
                                                                                :id="'edit-size-' + size.value"
                                                                                :value="size.value"
                                                                                v-model="parameters.iconsize"
                                                                                class="form-radio" />
                                                                            <label :for="'edit-size-' + size.value">
                                                                                <img :src="'https://sanity.skynettechnologies.us/assets/images/' + parameters.icontype + '.svg'"
                                                                                    alt="" :width="size.width"
                                                                                    :height="size.height" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="isSizeSwitcherEnabled"
                                                            class="custom-size-controls mt-3">
                                                            <div class="row">
                                                                <div class="col-xs-auto">
                                                                    <label for="widget_icon_size_custom"
                                                                        class="col-sm-12 col-form-label">
                                                                        Select exact icon size:
                                                                    </label>
                                                                    <input type="number" id="widget_icon_size_custom"
                                                                        v-model="widgetSettings.widget_icon_size_custom"
                                                                        min="20" max="150" class="form-control"
                                                                        @input="handleInput1" />
                                                                    <span>PX</span>
                                                                    <div class="description">20 - 150px are
                                                                        permitted values</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- </div> -->
                                                    </div>
                                                    <div class="save-changes-btn">
                                                        <button type="submit" class="btn btn-primary">Save
                                                            Changes</button>
                                                        <div class="mt-30 row">
                                                            <div v-if="showSuccessMessage" class="success-message">
                                                                Settings successfully saved!
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </AposModalBody>
        </template>
    </AposModal>
</template>

<script>
export default {
    props: {
        moduleName: String
    },
    emits: ['safe-close'],
    data() {
        return {
            modal: { active: false, showModal: false, type: 'overlay' },
            user: {
                name: '',
                email: ''
            },
            allinoneaccessibilitylogo: 'https://sanity.skynettechnologies.us/assets/images/all-in-one-accessibility-logo.svg',
            parameters: {
                hexaColor: '420083',
                widget_size: '0',
                position: 'bottom_right',
                icontype: 'aioa-icon-type-1',
                iconsize: 'aioa-default-icon',
            },
            widgetSettings: {
                widget_icon_size_custom: '',
                custom_position_x_value: '',
                custom_position_y_value: '',
                custom_position_left_right: 'To the right',
                custom_position_top_bottom: 'To the bottom',
            },
            isSwitcherEnabled: false,
            isSizeSwitcherEnabled: false,
            showSuccessMessage: false,
            isValid: false,
            elementStyle: {
                marginTop: '0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            },
            logoStyle: {
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
            },
            iconTypes: [
                { value: 'aioa-icon-type-1', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-1.svg' },
                { value: 'aioa-icon-type-2', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-2.svg' },
                { value: 'aioa-icon-type-3', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-3.svg' },
                { value: 'aioa-icon-type-4', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-4.svg' },
                { value: 'aioa-icon-type-5', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-5.svg' },
                { value: 'aioa-icon-type-6', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-6.svg' },
                { value: 'aioa-icon-type-7', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-7.svg' },
                { value: 'aioa-icon-type-8', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-8.svg' },
                { value: 'aioa-icon-type-9', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-9.svg' },
                { value: 'aioa-icon-type-10', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-10.svg' },
                { value: 'aioa-icon-type-11', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-11.svg' },
                { value: 'aioa-icon-type-12', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-12.svg' },
                { value: 'aioa-icon-type-13', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-13.svg' },
                { value: 'aioa-icon-type-14', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-14.svg' },
                { value: 'aioa-icon-type-15', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-15.svg' },
                { value: 'aioa-icon-type-16', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-16.svg' },
                { value: 'aioa-icon-type-17', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-17.svg' },
                { value: 'aioa-icon-type-18', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-18.svg' },
                { value: 'aioa-icon-type-19', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-19.svg' },
                { value: 'aioa-icon-type-20', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-20.svg' },
                { value: 'aioa-icon-type-21', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-21.svg' },
                { value: 'aioa-icon-type-22', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-22.svg' },
                { value: 'aioa-icon-type-23', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-23.svg' },
                { value: 'aioa-icon-type-24', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-24.svg' },
                { value: 'aioa-icon-type-25', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-25.svg' },
                { value: 'aioa-icon-type-26', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-26.svg' },
                { value: 'aioa-icon-type-27', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-27.svg' },
                { value: 'aioa-icon-type-28', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-28.svg' },
                { value: 'aioa-icon-type-29', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-29.svg' },

                // Add other icon types here...
            ],
            iconSizes: [
                { value: 'aioa-big-icon', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-1.svg', width: 75, height: 75 },
                { value: 'aioa-medium-icon', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-1.svg', width: 65, height: 65 },
                { value: 'aioa-default-icon', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-1.svg', width: 55, height: 55 },
                { value: 'aioa-small-icon', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-1.svg', width: 45, height: 45 },
                { value: 'aioa-extra-small-icon', src: 'https://sanity.skynettechnologies.us/assets/images/aioa-icon-type-1.svg', width: 35, height: 35 },
            ],

        };
    },
    async mounted() {
        this.modal.active = true;
        // Create link element for Bootstrap CSS
        const bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.href = 'https://sanity.skynettechnologies.us/assets/css/bootstrap.min.css';
        document.head.appendChild(bootstrapLink);

        // Create link element for your custom CSS
        const customLink = document.createElement('link');
        customLink.rel = 'stylesheet';
        customLink.href = 'https://sanity.skynettechnologies.us/assets/css/style.css';
        document.head.appendChild(customLink);
        this.getAPIData();

    },
    computed: {
    },
    methods: {
        onSaveChanges() {
            const formdata = new FormData();
            const widget_icon_size_custom = this.widgetSettings.widget_icon_size_custom || '';
            const custom_position_x_value = this.widgetSettings.custom_position_x_value || '';
            const custom_position_y_value = this.widgetSettings.custom_position_y_value || '';
            const custom_position_left_right = this.widgetSettings.custom_position_left_right || '';
            const custom_position_top_bottom = this.widgetSettings.custom_position_top_bottom || '';

            let widget_position_right = '',
                widget_position_left = '',
                widget_position_top = '',
                widget_position_bottom = '';

            if (custom_position_left_right == 'cust-pos-to-the-right') {
                widget_position_right = custom_position_x_value;
            } else {
                widget_position_left = custom_position_x_value;
            }

            if (custom_position_left_right == 'cust-pos-to-the-lower') {
                widget_position_bottom = custom_position_y_value;
            } else {
                widget_position_top = custom_position_y_value;
            }

            formdata.append('u', window.location.hostname);
            formdata.append('widget_position', this.parameters.position);
            formdata.append('widget_color_code', this.parameters.hexaColor);
            formdata.append('widget_icon_type', this.parameters.icontype);
            formdata.append('widget_icon_size', this.parameters.iconsize);
            formdata.append('widget_size', this.parameters.widget_size);
            formdata.append('is_widget_custom_position', this.isSwitcherEnabled ? '1' : '0');
            formdata.append('is_widget_custom_size', this.isSizeSwitcherEnabled ? '1' : '0');
            formdata.append('widget_icon_size_custom', widget_icon_size_custom);
            formdata.append('widget_position_right', widget_position_right);
            formdata.append('widget_position_left', widget_position_left);
            formdata.append('widget_position_top', widget_position_top);
            formdata.append('widget_position_bottom', widget_position_bottom);

            console.log("this.isSizeSwitcherEnabled : ", this.isSizeSwitcherEnabled);

            console.log('u', window.location.hostname);
            console.log('widget_position', this.parameters.position);
            console.log('widget_color_code', this.parameters.hexaColor);
            console.log('widget_icon_type', this.parameters.icontype);
            console.log('widget_icon_size', this.parameters.iconsize);
            console.log('widget_size', this.parameters.widget_size);
            console.log('is_widget_custom_position', this.isSwitcherEnabled ? '1' : '0');
            console.log('is_widget_custom_size', this.isSizeSwitcherEnabled ? '1' : '0');
            console.log('widget_icon_size_custom', widget_icon_size_custom);
            console.log('widget_position_right', widget_position_right);
            console.log('widget_position_left', widget_position_left);
            console.log('widget_position_top', widget_position_top);
            console.log('widget_position_bottom', widget_position_bottom);


            fetch('https://ada.skynettechnologies.us/api/widget-setting-update-platform', {
                method: 'POST',
                body: formdata,
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log('response Save Data', response);
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 3000); // Reset message after 3 seconds
                })
                .catch((error) => console.log('error', error));
        },
        getAPIData() {
            const formdata = new FormData();
            formdata.append('website_url', window.location.hostname);

            fetch('https://ada.skynettechnologies.us/api/widget-settings', {
                method: 'POST',
                body: formdata,
            })
                .then((response) => response.json())
                .then((response) => {
                    if (Object.keys(response.Data).length !== 0) {
                        this.isValid = true;
                        this.parameters = {
                            hexaColor: response.Data.widget_color_code,
                            position: response.Data.widget_position,
                            icontype: response.Data.widget_icon_type,
                            iconsize: response.Data.widget_icon_size,
                            widget_size: response.Data.widget_size,
                        };
                        this.isSizeSwitcherEnabled = response.Data.is_widget_custom_size == '0' ? false : true;
                        this.isSwitcherEnabled = response.Data.is_widget_custom_position == '0' ? false : true;

                        this.widgetSettings = {
                            widget_icon_size_custom: response.Data.widget_icon_size_custom || '',
                            custom_position_x_value: parseInt(response.Data.widget_position_left) > 0
                                ? response.Data.widget_position_left
                                : response.Data.widget_position_right,
                            custom_position_y_value: parseInt(response.Data.widget_position_bottom) > 0
                                ? response.Data.widget_position_bottom
                                : response.Data.widget_position_top,
                            custom_position_left_right: parseInt(response.Data.widget_position_left) > 0 ? 'cust-pos-to-the-left' : 'cust-pos-to-the-right',
                            custom_position_top_bottom: parseInt(response.Data.widget_position_bottom) > 0 ? 'cust-pos-to-the-lower' : 'cust-pos-to-the-upper',
                        };

                    } else {
                        this.isValid = false;
                    }
                })
                .catch((error) => console.log('error', error));
        },
        handleInput(e) {
            e.target.value = Math.min(Math.max(Number(e.target.value), 0), 250).toString();
        },
        handleInput2(e) {
            e.target.value = Math.min(Math.max(Number(e.target.value), 0), 250).toString();
        },
        handleInput1(e) {
            e.target.value = Math.min(Math.max(Number(e.target.value), 0), 150).toString();
        },
        onIconChange(e) {
            this.parameters.icontype = e.target.value;
        },
        setIconSize(e) {
            this.parameters.iconsize = e.target.value;
        },
        ready() {
            this.$refs.cancelButton.$el.querySelector('button').focus();
        },
        cancel() {
            this.modal.showModal = false;
        }
    },
    beforeDestroy() {
        if (this.pollInterval) {
            clearInterval(this.pollInterval);
        }
    }
};
</script>

<style scoped>
.btn [class*=" icon-"],
.btn [class^=icon-],
.s-btn [class*=" icon-"],
.s-btn [class^=icon-],
[class*=" icon-"],
[class^=icon-],
i.icon,
span.icon {
    display: contents;
}

img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
}

.all-in-one-accessibility-wrap .accessibility-settings .all-one-accessibility-form [type=radio]:checked+label:not(.edit-position),
.all-in-one-accessibility-wrap .accessibility-settings .all-one-accessibility-form [type=radio]:not(:checked)+label:not(.edit-position) {
    width: 130px;
    height: 130px;
    padding: 10px !important;
    text-align: center;
    background-color: #3c007f !important;
    outline: 4px solid #fff;
    outline-offset: -4px;
    border-radius: 10px;
}

.all-in-one-accessibility-wrap .accessibility-settings .all-one-accessibility-form {
    margin: 0 auto 40px;
    border-radius: 19px;
    background: #e9efff;
}

.success-message {
    color: green;
}

.custom-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    /* Adjust width as needed */
    height: 34px;
    /* Adjust height as needed */
}

.custom-switch input {
    opacity: 0;
    /* Hide the default checkbox */
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    /* Background color when off */
    transition: .4s;
    /* Transition effect */
    border-radius: 34px;
    /* Rounded corners */
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    /* Height of the slider knob */
    width: 26px;
    /* Width of the slider knob */
    left: 4px;
    /* Position of the knob */
    bottom: 4px;
    /* Position of the knob */
    background-color: white;
    /* Color of the knob */
    border-radius: 50%;
    /* Round knob */
    transition: .4s;
    /* Transition effect */
}

/* Change background color when checked */
input:checked+.slider {
    background-color: #420083;
    /* Background color when on */
}

/* Move the knob when checked */
input:checked+.slider:before {
    transform: translateX(26px);
    /* Move knob to the right */
}
</style>
