/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil-community/router";
export namespace Components {
    interface AppEncryptFlow {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface EncryptFlowStepOne {
    }
    interface EncryptFlowStepThree {
    }
    interface EncryptFlowStepTwo {
    }
    interface FormButton {
        "variant": 'solid' | 'outline';
    }
    interface FormInputField {
    }
    interface FormUploadFile {
        "file": File;
    }
    interface SidebarListItem {
        "index": number;
        "isActive": boolean;
    }
    interface SidebarRoot {
        "currentStep": number;
    }
    interface StepCounter {
        "count": number;
    }
    interface TypographyHeading {
        "color": 'primary' | 'accent' | 'gray';
        "size": 'medium' | 'big';
    }
    interface TypographyText {
        "color": 'primary' | 'accent' | 'gray';
        "size": 'small' | 'medium';
    }
}
declare global {
    interface HTMLAppEncryptFlowElement extends Components.AppEncryptFlow, HTMLStencilElement {
    }
    var HTMLAppEncryptFlowElement: {
        prototype: HTMLAppEncryptFlowElement;
        new (): HTMLAppEncryptFlowElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLEncryptFlowStepOneElement extends Components.EncryptFlowStepOne, HTMLStencilElement {
    }
    var HTMLEncryptFlowStepOneElement: {
        prototype: HTMLEncryptFlowStepOneElement;
        new (): HTMLEncryptFlowStepOneElement;
    };
    interface HTMLEncryptFlowStepThreeElement extends Components.EncryptFlowStepThree, HTMLStencilElement {
    }
    var HTMLEncryptFlowStepThreeElement: {
        prototype: HTMLEncryptFlowStepThreeElement;
        new (): HTMLEncryptFlowStepThreeElement;
    };
    interface HTMLEncryptFlowStepTwoElement extends Components.EncryptFlowStepTwo, HTMLStencilElement {
    }
    var HTMLEncryptFlowStepTwoElement: {
        prototype: HTMLEncryptFlowStepTwoElement;
        new (): HTMLEncryptFlowStepTwoElement;
    };
    interface HTMLFormButtonElement extends Components.FormButton, HTMLStencilElement {
    }
    var HTMLFormButtonElement: {
        prototype: HTMLFormButtonElement;
        new (): HTMLFormButtonElement;
    };
    interface HTMLFormInputFieldElement extends Components.FormInputField, HTMLStencilElement {
    }
    var HTMLFormInputFieldElement: {
        prototype: HTMLFormInputFieldElement;
        new (): HTMLFormInputFieldElement;
    };
    interface HTMLFormUploadFileElement extends Components.FormUploadFile, HTMLStencilElement {
    }
    var HTMLFormUploadFileElement: {
        prototype: HTMLFormUploadFileElement;
        new (): HTMLFormUploadFileElement;
    };
    interface HTMLSidebarListItemElement extends Components.SidebarListItem, HTMLStencilElement {
    }
    var HTMLSidebarListItemElement: {
        prototype: HTMLSidebarListItemElement;
        new (): HTMLSidebarListItemElement;
    };
    interface HTMLSidebarRootElement extends Components.SidebarRoot, HTMLStencilElement {
    }
    var HTMLSidebarRootElement: {
        prototype: HTMLSidebarRootElement;
        new (): HTMLSidebarRootElement;
    };
    interface HTMLStepCounterElement extends Components.StepCounter, HTMLStencilElement {
    }
    var HTMLStepCounterElement: {
        prototype: HTMLStepCounterElement;
        new (): HTMLStepCounterElement;
    };
    interface HTMLTypographyHeadingElement extends Components.TypographyHeading, HTMLStencilElement {
    }
    var HTMLTypographyHeadingElement: {
        prototype: HTMLTypographyHeadingElement;
        new (): HTMLTypographyHeadingElement;
    };
    interface HTMLTypographyTextElement extends Components.TypographyText, HTMLStencilElement {
    }
    var HTMLTypographyTextElement: {
        prototype: HTMLTypographyTextElement;
        new (): HTMLTypographyTextElement;
    };
    interface HTMLElementTagNameMap {
        "app-encrypt-flow": HTMLAppEncryptFlowElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "encrypt-flow-step-one": HTMLEncryptFlowStepOneElement;
        "encrypt-flow-step-three": HTMLEncryptFlowStepThreeElement;
        "encrypt-flow-step-two": HTMLEncryptFlowStepTwoElement;
        "form-button": HTMLFormButtonElement;
        "form-input-field": HTMLFormInputFieldElement;
        "form-upload-file": HTMLFormUploadFileElement;
        "sidebar-list-item": HTMLSidebarListItemElement;
        "sidebar-root": HTMLSidebarRootElement;
        "step-counter": HTMLStepCounterElement;
        "typography-heading": HTMLTypographyHeadingElement;
        "typography-text": HTMLTypographyTextElement;
    }
}
declare namespace LocalJSX {
    interface AppEncryptFlow {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface EncryptFlowStepOne {
    }
    interface EncryptFlowStepThree {
    }
    interface EncryptFlowStepTwo {
    }
    interface FormButton {
        "variant"?: 'solid' | 'outline';
    }
    interface FormInputField {
    }
    interface FormUploadFile {
        "file"?: File;
    }
    interface SidebarListItem {
        "index"?: number;
        "isActive"?: boolean;
    }
    interface SidebarRoot {
        "currentStep"?: number;
    }
    interface StepCounter {
        "count"?: number;
    }
    interface TypographyHeading {
        "color"?: 'primary' | 'accent' | 'gray';
        "size"?: 'medium' | 'big';
    }
    interface TypographyText {
        "color"?: 'primary' | 'accent' | 'gray';
        "size"?: 'small' | 'medium';
    }
    interface IntrinsicElements {
        "app-encrypt-flow": AppEncryptFlow;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "encrypt-flow-step-one": EncryptFlowStepOne;
        "encrypt-flow-step-three": EncryptFlowStepThree;
        "encrypt-flow-step-two": EncryptFlowStepTwo;
        "form-button": FormButton;
        "form-input-field": FormInputField;
        "form-upload-file": FormUploadFile;
        "sidebar-list-item": SidebarListItem;
        "sidebar-root": SidebarRoot;
        "step-counter": StepCounter;
        "typography-heading": TypographyHeading;
        "typography-text": TypographyText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-encrypt-flow": LocalJSX.AppEncryptFlow & JSXBase.HTMLAttributes<HTMLAppEncryptFlowElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "encrypt-flow-step-one": LocalJSX.EncryptFlowStepOne & JSXBase.HTMLAttributes<HTMLEncryptFlowStepOneElement>;
            "encrypt-flow-step-three": LocalJSX.EncryptFlowStepThree & JSXBase.HTMLAttributes<HTMLEncryptFlowStepThreeElement>;
            "encrypt-flow-step-two": LocalJSX.EncryptFlowStepTwo & JSXBase.HTMLAttributes<HTMLEncryptFlowStepTwoElement>;
            "form-button": LocalJSX.FormButton & JSXBase.HTMLAttributes<HTMLFormButtonElement>;
            "form-input-field": LocalJSX.FormInputField & JSXBase.HTMLAttributes<HTMLFormInputFieldElement>;
            "form-upload-file": LocalJSX.FormUploadFile & JSXBase.HTMLAttributes<HTMLFormUploadFileElement>;
            "sidebar-list-item": LocalJSX.SidebarListItem & JSXBase.HTMLAttributes<HTMLSidebarListItemElement>;
            "sidebar-root": LocalJSX.SidebarRoot & JSXBase.HTMLAttributes<HTMLSidebarRootElement>;
            "step-counter": LocalJSX.StepCounter & JSXBase.HTMLAttributes<HTMLStepCounterElement>;
            "typography-heading": LocalJSX.TypographyHeading & JSXBase.HTMLAttributes<HTMLTypographyHeadingElement>;
            "typography-text": LocalJSX.TypographyText & JSXBase.HTMLAttributes<HTMLTypographyTextElement>;
        }
    }
}
