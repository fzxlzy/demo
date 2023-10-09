import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    configure: (config: Object) => void;
    getCurrentState: (requestedInterface?: string,) => Promise<Object>;
    addListener(type: Object, listener: () => void,): void;
    removeListeners(type: Object, listener: () => void,): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RTNNetinfo');



