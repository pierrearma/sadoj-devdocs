# sadoj-npwd

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-npwd`

Ce script permet l'interaction entre le téléphone et notre framework.

Nous utilisons le téléphone [NPWD](https://github.com/project-error/npwd).

## Utilisation

### Envoyer un SMS

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-npwd:server:emitMessage", senderNumber --[[ string ]], targetNumber --[[ string ]], message --[[ string ]])
```

* **Paramètres:**
  * **senderNumber:** Numéro du message d'origine.
  * **targetNumber:** Numéro du message cible.
  * **message:** Message à envoyer.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-npwd:server:emitMessage", senderNumber --[[ string ]], targetNumber --[[ string ]], message --[[ string ]])
```

* **Paramètres:**
  * **senderNumber:** Numéro du message d'origine.
  * **targetNumber:** Numéro du message cible.
  * **message:** Message à envoyer.

<!-- tabs:end -->

### Écouter les SMS d'un numéro

<!-- tabs:start -->

#### **Export (serveur)**

```lua
local id --[[ integer ]] = exports["sadoj-npwd"]:AddMessageListener(number --[[ string ]], function(ctx)
    -- votre code ici
end --[[ function ]])
```

```lua
ctx = {
    source --[[ integer ]], -- Server ID
    data = {
        conversationId --[[ string ]], -- Conversation ID
        tgtPhoneNumber --[[ string ]], -- Numéro du message cible
        message --[[ string ]], -- Message
    }
}
```

* **Paramètres:**
  * **number:** Numéro du téléphone.
  * **function:** Fonction avec votre code.
* **Retour:**
  * **id:** Identifiant du listener.

Pour supprimer le listener:

```lua
exports["sadoj-npwd"]:RemoveMessageListener(id --[[ integer ]])
```

<!-- tabs:end -->

## API

### Envoyer un SMS

Requête POST à l'adresse `http://[IP]:[PORT]/sadoj-npwd/sendsms`.

* **Paramètres (JSON):**
  * **senderNumber:** Numéro du message d'origine. (string)
  * **targetNumber:** Numéro du message cible. (string)
  * **message:** Message à envoyer. (string)
* **Retour:**
  * En cas de succès:
    * **success:** `true`
  * En cas d'erreur:
    * Erreur 400 avec un message d'erreur.


{docsify-updated}
