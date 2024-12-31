export declare abstract class KitPlugin {
    /**
     * The name of this plugin.
     */
    abstract name: string;
    /**
     * The emitter that belongs to this plugin.
     */
    private emitter;
    protected constructor();
    /**
     * Registers the plugin.
     */
    _register(pEmitter: any): void;
    /**
     * The entry point for custom behavior after registration for custom plugins.
     */
    abstract onRegistered(): void;
    /**
     * Emit an event.
     * @param pEvent - The event to emit.
     */
    emit(pEvent: any): void;
}
//# sourceMappingURL=kit-plugin.d.ts.map