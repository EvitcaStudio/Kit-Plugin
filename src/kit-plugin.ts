export class KitPlugin {
    name: string = 'UnnamedPlugin';
    emitter: /*EventEmitter*/ any;

    /**
     * Registers the plugin.
     */
    async register() {
        if (!this.name || typeof this.name !== 'string') {
            throw new Error(`[Kit Plugin] plugin must have a valid name.`);
        }

        if (!/^[a-zA-Z0-9-_]+$/.test(this.name)) {
            throw new Error(`Plugin name '${this.name}' contains invalid characters. Only alphanumeric, dashes, and underscores are allowed.`);
        }
    }

    /**
     * Called when the plugin is registered.
     * @param pEmitter - The event emitter.
     */
    onRegistered(pEmitter: /*EventEmitter*/ any) {
        this.emitter = pEmitter;
    }

    /**
     * Emit an event.
     * @param pEvent - The event to emit.
     */
    emit(pEvent: /*EmitterEvent*/ any) {
        if (!this.emitter) {
            console.error('[Kit Plugin] emitter not set. This is an indication that the plugin is not registered.');
            return;
        }
        this.emitter.emit(pEvent);
    }
}