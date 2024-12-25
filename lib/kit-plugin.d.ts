export declare class KitPlugin {
    /**
     * The name of this plugin.
     */
    name: string;
    /**
     * The emitter that belongs to this plugin.
     */
    private emitter;
    /**
     * Registers the plugin.
     */
    _register(pEmitter: any): void;
    /**
     * This method is meant to be implemented by the subclass.
     * It serves as an entry point for custom behavior after registration.
     * The parent class doesn't define any logic for this method.
     */
    protected onRegistered(): void;
    /**
     * Emit an event.
     * @param pEvent - The event to emit.
     */
    emit(pEvent: any): void;
}
//# sourceMappingURL=kit-plugin.d.ts.map