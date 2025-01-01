export abstract class KitPlugin {
    /**
     * The name of this plugin.
     */
    abstract name: string;
    /**
     * The emitter that belongs to this plugin.
     */
    protected _emitter: /*EventEmitter*/ unknown;

    constructor() {

    }

    /**
     * Registers the plugin.
     */
    _register(pEmitter: /*EventEmitter*/ unknown) {
        if (!this.name || typeof this.name !== 'string' || !/^[a-zA-Z0-9-_]+$/.test(this.name)) {
            throw new Error(`[Kit Plugin] Invalid plugin name: '${this.name}'. The name must be a non-empty string containing only alphanumeric characters, dashes, or underscores.`);
        }
        this._emitter = pEmitter;
        this.onRegistered();
    }

    /**
     * The entry point for custom behavior after registration for custom plugins.
     */
    abstract onRegistered(): void

    /**
     * Emit an event.
     * @param pEvent - The event to emit.
     */
    emit(pEvent: /*EmitterEvent*/ unknown) {
        if (!this._emitter) {
            console.error('[Kit Plugin] emitter not set. This is an indication that the plugin is not registered.');
            return;
        }
        this._emitter.emit(pEvent);
    }
}