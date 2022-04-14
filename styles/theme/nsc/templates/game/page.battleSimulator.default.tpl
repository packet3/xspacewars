{block name="title" prepend}{$LNG.lm_battlesim}{/block}
{block name="content"}
<link rel="stylesheet" type="text/css" href="{$dpath}css/battleSimulator.css">
<div id="page">
   <div id="content">
      <div id="ally_content" class="conteiner">
         <form id="form" name="battlesim">
            <input type="hidden" name="slots" id="slots" value="{$Slots + 1}">
            <div class="gray_flettab" style="padding-right:0;">
               {$LNG.lm_battlesim}
            </div>
            <div class="fleettab9" style="margin-bottom:0;"></div>
            <div class="battlesim_ress">
               <span>{$LNG.bs_steal} </span>
               <input type="text" size="10" value="{if isset($battleinput.0.1.901)}{$battleinput.0.1.901}{else}0{/if}" name="battleinput[0][1][901]" 
               class="colore901 rexx24 tooltip" data_tooltip_content="{$LNG.tech.901}" style="background-image:url({$dpath}img/resources/901f.png)"> 
               <input type="text" size="10" value="{if isset($battleinput.0.1.902)}{$battleinput.0.1.902}{else}0{/if}" name="battleinput[0][1][902]"
               class="colore902 rexx24 tooltip" data_tooltip_content="{$LNG.tech.902}" style="background-image:url({$dpath}img/resources/902f.png)">  
               <input type="text" size="10" value="{if isset($battleinput.0.1.903)}{$battleinput.0.1.903}{else}0{/if}" name="battleinput[0][1][903]"
               class="colore903 rexx24 tooltip" data_tooltip_content="{$LNG.tech.903}" style="background-image:url({$dpath}img/resources/903f.png)">
            </div>
            <div id="tabs">
               <input type="button" class="rexx25 tooltip" data_tooltip_content="{$LNG.bs_wait}" onclick="return add();" value="+">
               <ul class="nav nav-tabs" id="myTab" role="tablist">
                  
                  {section name=tab start=0 loop=$Slots}
                  <li class="nav-item">
                     {* <button class="nav-link active" id="tabs-{$smarty.section.tab.index}" data-bs-toggle="tab" data-bs-target="#tabs-{$smarty.section.tab.index}" type="button" role="tab" aria-controls="tabs-{$smarty.section.tab.index}">
                        {$LNG.bs_acs_slot} {$smarty.section.tab.index + 1}
                     </button> *}
                  <a class="nav-link tab-links" data-toggle="tab" id="tabs-{$smarty.section.tab.index}" href="#tabs-{$smarty.section.tab.index}">{$LNG.bs_acs_slot} {$smarty.section.tab.index + 1}</a>
                  </li>
                  {/section}
                  
               </ul>
            <div class="clear"></div>
              <div class="tab-content">
               {section name=content start=0 loop=$Slots}
               <div id="tabs-{$smarty.section.content.index}" class="tab-pane simulationPanel">
                <div class="rexx14" style="width: 702px;"> 
                    <div class="rexx19">
                        <span class="rexx21">{$LNG.bs_techno}</span>
                        <span id="tech-defend-reset-{$smarty.section.content.index}" class="rexx20">{$LNG.bs_reset}</span>
                        <span id="tech-attack-reset-{$smarty.section.content.index}" class="rexx20">{$LNG.bs_reset}</span>
                    </div>
                    {foreach $reslist.battle_bonus as $id}
                    <div class="rexx16">
                        <a href="#" onclick="return Dialog.info({$id})"><img src="{$dpath}gebaeude/{$id}.gif" alt="{$LNG.tech.$id}" /></a>
                        <span>{$LNG.tech.{$id}}</span>
                        <input type="text" data-tech-defend-reset-{$smarty.section.content.index}="tech_defend_reset-{$smarty.section.content.index}" size="10" data-battlesim-index="{$smarty.section.content.index}" value="{if isset($battleinput.{$smarty.section.content.index}.1.{$id})}{$battleinput.{$smarty.section.content.index}.1.{$id}}{else}0{/if}" name="battleinput[{$smarty.section.content.index}][1][{$id}]" class="rexx18">
                        <input type="text" data-tech-attack-reset-{$smarty.section.content.index}="tech_attack_reset-{$smarty.section.content.index}" size="10" value="{if isset($battleinput.{$smarty.section.content.index}.0.{$id})}{$battleinput.{$smarty.section.content.index}.0.{$id}}{else}0{/if}" name="battleinput[{$smarty.section.content.index}][0][{$id}]" class="rexx17">
                    </div>
                    {/foreach}
                </div>
                <div class="clear"></div>
                  <div class="clear"></div>
                  <div class="rexx15">
                  <div class="rexx19">
                    <span class="rexx21">{$LNG.tech.200}</span>
                    <span id="ships-defend-reset-{$smarty.section.content.index}" class="rexx20">{$LNG.bs_reset}</span>
                    <span id="ships-attack-reset-{$smarty.section.content.index}" class="rexx20">{$LNG.bs_reset}</span>
                  </div>
                     {foreach $reslist.fleet as $id}
                     <div class="rexx16">
                        <a href="#" onclick="return Dialog.info({$id})"><img src="{$dpath}gebaeude/{$id}.gif" alt="{$LNG.tech.$id}" /></a>
                        <span>{$LNG.tech.$id}</span>
                        <input class="fleetAttCountBS rexx18" type="text" data-ships-defend-reset-{$smarty.section.content.index}="ships_defend_reset-{$smarty.section.content.index}" size="10" value="{if isset($battleinput.{$smarty.section.content.index}.1.$id)}{$battleinput.{$smarty.section.content.index}.1.$id}{else}0{/if}" name="battleinput[{$smarty.section.content.index}][1][{$id}]">
                        <input class="fleetDefCountBS rexx17" type="text" data-ships-attack-reset-{$smarty.section.content.index}="ships_attack_reset-{$smarty.section.content.index}" size="10" value="{if isset($battleinput.{$smarty.section.content.index}.0.$id)}{$battleinput.{$smarty.section.content.index}.0.$id}{else}0{/if}" name="battleinput[{$smarty.section.content.index}][0][{$id}]">
                    </div>
                     {/foreach} 
                  </div>
                  {if $smarty.section.content.index == 0}											
                    <div class="rexx15">
                    <div class="rexx19">
                        <span class="rexx21">{$LNG.tech.400}</span>
                        <span id="planets-defend-reset-{$smarty.section.content.index}" class="rexx20">{$LNG.bs_reset}</span>
                    </div>
                     {foreach $reslist.defense as $id}
                     <div class="rexx16">
                        <a href="#" onclick="return Dialog.info({$id})"><img src="{$dpath}gebaeude/{$id}.gif" alt="{$LNG.tech.$id}" /></a>
                        <span>{$LNG.tech.$id}</span>
                        <input class="fleetDefCountBS rexx18" type="text" data-planets-defend-reset-{$smarty.section.content.index}="planets_defend_reset-{$smarty.section.content.index}" size="10" value="{if isset($battleinput.{$smarty.section.content.index}.1.$id)}{$battleinput.{$smarty.section.content.index}.1.$id}{else}0{/if}" name="battleinput[{$smarty.section.content.index}][1][{$id}]">
                    </div>
                     {/foreach}    
                    </div>
                  {/if}
                  <div class="clear"></div>
               </div>
               {/section}
               </div>
            </div>
            <div class="alleanza57" style="margin-top: 5px;"></div>
            <div class="fleettab1" style="height: 47px;"> 
            <div id="submit" class="fl_bigbtn_go" onclick="return check();" style="line-height: 29px;">{$LNG.bs_send}</div>
            <div id="wait" style="display:none;">
               {$LNG.bs_wait}
            </div>
            </div>
         </form>
      </div>
   </div>
</div>
<div class="clear"></div>
</div>
{/block}