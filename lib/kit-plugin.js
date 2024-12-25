export class KitPlugin {
    /**
     * The name of this plugin.
     */
    name = '';
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
     * This method is meant to be implemented by the subclass.
     * It serves as an entry point for custom behavior after registration.
     * The parent class doesn't define any logic for this method.
     */
    onRegistered() {
        // No-op in the parent class.
        // Subclasses can override this to add their own behavior.
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
