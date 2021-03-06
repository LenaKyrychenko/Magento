<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/module-gift-registry
 * @version   1.2.34
 * @copyright Copyright (C) 2020 Mirasvit (https://mirasvit.com/)
 */



namespace Mirasvit\Giftr\Api\Service;


interface RegistryProviderInterface
{
    /**
     * Retrieve Gift Registry.
     *
     * @param int|null $registryId
     * @param boolean $shared Is Registry shared or not
     *
     * @return \Mirasvit\Giftr\Model\Registry
     */
    public function getRegistry($registryId = null, $shared = false);
}