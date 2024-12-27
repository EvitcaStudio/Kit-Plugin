export class KitPlugin {
    /**
     * The emitter that belongs to this plugin.
     */
    emitter;
    /**
     * Registers the plugin.
     */
    _register(pEmitter) {
        if (!this.name || typeof this.name !== 'string' || !/^[a-zA-Z0-9-_]+$/.test(this.name)) {
            throw new Error(`[Kit Plugin] Invalid plugin name: '${this.name}'. The name must be a non-empty string containing only alphanumeric characters, dashes, or underscores.`);
        }
        this.emitter = pEmitter;
        this.onRegistered();
    }
    /**
     * Emit an event.
     * @param pEvent - The event to emit.
     */
    emit(pEvent) {
        if (!this.emitter) {
            console.error('[Kit Plugin] emitter not set. This is an indication that the plugin is not registered.');
            return;
        }
        this.emitter.emit(pEvent);
    }
}
