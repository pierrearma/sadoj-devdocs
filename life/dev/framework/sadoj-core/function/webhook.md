# sadoj-core - Fonctions - Webhook

> Auteur de la page: Pierre & Thomas.

---

#### SendDiscordWebhook

<!-- tabs:start -->

#### **Export (serveur)**

```lua
exports["sadoj-core"]:SendDiscordWebhook(Link --[[ string ]], Data --[[ table ]])
```

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-core/server/functions/webhooks/SendDiscordWebhook", Link --[[ string ]], Data --[[ table ]])
```

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-core/server/functions/webhooks/SendDiscordWebhook", Link --[[ string ]], Data --[[ table ]])
```

<!-- tabs:end -->

```lua
local data = {
  content = --[[ string ]],
  username = --[[ string ]],
  avatar_url = --[[ string ]],
  embeds = {
    {
      title = --[[ string ]],
      description = --[[ string ]],
      url = --[[ string ]],
      color = --[[ number ]],
      fields = {
        {
          name = --[[ string ]],
          value = --[[ string ]]
        },
        ...
      },
      author = {
        name = --[[ string ]],
        url = --[[ string ]],
        icon_url = --[[ string ]],
      },
      footer = {
        text = --[[ string ]],
        icon_url = --[[ string ]],
      },
      timestamp = --[[ string ]],
      image = {
        url = --[[ string ]]
      },
      thumbnail = {
        url = --[[ string ]]
      },
    }
    ...
  }
}
```

{docsify-updated}